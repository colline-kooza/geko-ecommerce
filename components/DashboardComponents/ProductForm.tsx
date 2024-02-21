"use client";
import adminApiRequest from "@/utils/ApiRequest";
import { generateSlug } from "@/utils/generateSlug";
import { useState } from "react";
import { useForm } from "react-hook-form";
import FormHeader from "./FormHeader";
import ImagesInput from "./ImagesInput";
import SelectInput from "./SelectInput";
import { CustomTextArea } from "./TextArea";
import { TextInputs } from "./TextInputs";
import ToggleInput from "./ToggleInput";

// interface ProductFormProps {
//   initialData?: ProductData | null;
// }
export function ProductForm({ initialData, categories }: any) {
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const [images, setImages] = useState(initialData?.images || "");

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      ...initialData,
      isPublished: true,
      isFeatured: false || undefined,
    },
  });

  const isPublished = watch("isPublished");
  const isFeatured = watch("isFeatured");

  async function onSubmit(data: any) {
    const slug = generateSlug(data.name);
    data.images = images;
    data.isPublished = isPublished;
    data.isFeatured = isFeatured;
    data.slug = slug;
    // console.log(data);

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    const method = initialData ? "PATCH" : "POST";
    const apiUrl = initialData
      ? `${baseUrl}/api/products/${initialData.id}`
      : `${baseUrl}/api/products`;
    reset();

    adminApiRequest({
      setLoading: setLoading,
      setLoading2: setLoading2,
      apiUrl: apiUrl,
      data: data,
      toastName: "Product",
      reset: reset,
      method: method,
    });
  }

  return (
    <div className='flex flex-col gap-2'>
      <FormHeader title='Product' />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='flex flex-col space-y-8 w-full lg:w-[80%] mt-4 border border-gray-900 p-5 rounded-lg'
      >
        <ImagesInput
          label='Product Images'
          images={images}
          endpoint='productImages'
          setImages={setImages}
        />
        <div className='flex gap-2'>
          <TextInputs
            placeholder='Enter Product Name'
            label='Product title'
            name='name'
            type='text'
            errors={errors}
            register={register}
          />
          <SelectInput
            label='Select Category'
            name='categoryId'
            register={register}
            errors={errors}
            className='max-w-xl'
            options={categories}
          />
        </div>

        <div className='flex gap-2'>
          <TextInputs
            placeholder='$1000'
            label='Product Current Price'
            name='currentPrice'
            type='number'
            errors={errors}
            register={register}
          />
          <TextInputs
            placeholder='$3000'
            label='Product Initial Price'
            name='initialPrice'
            type='number'
            errors={errors}
            register={register}
          />
          <TextInputs
            placeholder='5000'
            label='Product Quantity'
            name='quantity'
            type='number'
            errors={errors}
            register={register}
          />
        </div>

        <CustomTextArea
          label='Product Short Description'
          name='shortDescription'
          register={register}
          errors={errors}
        />
        <CustomTextArea
          label='Product Long Description'
          name='description'
          register={register}
          errors={errors}
        />

        {/* <ArrayInputs
          setItems={setWhatToLearn}
          items={whatToLearn}
          itemTitle='Learning Outcomes'
        /> */}

        {/* IsPublished */}
        <ToggleInput
          label='Publish your product'
          name='isPublished'
          trueTitle='Published'
          falseTitle='Draft'
          register={register}
          isActive={isPublished}
        />
        {/* isFeatured */}
        <ToggleInput
          label='Is this product featured?'
          name='isFeatured'
          trueTitle='Featured'
          falseTitle='Draft'
          register={register}
          isActive={isFeatured}
        />

        <div>
          {loading ? (
            <button
              disabled
              type='button'
              className='text-white bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-slate-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-slate-800 inline-flex items-center'
            >
              <svg
                aria-hidden='true'
                role='status'
                className='inline w-4 h-4 me-3 text-white animate-spin'
                viewBox='0 0 100 101'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
                  fill='#E5E7EB'
                />
                <path
                  d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
                  fill='currentColor'
                />
              </svg>
              {initialData ? "Updating Product..." : "Creating Product..."}
            </button>
          ) : (
            <button
              className='text-white bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-slate-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-slate-800 inline-flex items-center'
              type='submit'
            >
              {" "}
              {initialData ? "Update product" : "Create product"}
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
