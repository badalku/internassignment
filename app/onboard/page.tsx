'use client';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object({
  name: yup.string().required("Name is required"),
  bio: yup.string().required("Bio is required"),
  category: yup.array().of(yup.string()).min(1, "Select at least one category"),
  languages: yup.array().of(yup.string()).min(1, "Select at least one language"),
  feeRange: yup.string().required("Fee range is required"),
  location: yup.string().required("Location is required"),
  image: yup.mixed().nullable(),
});

const categories = ['Singer', 'Dancer', 'Speaker', 'DJ'];
const languages = ['Hindi', 'English', 'Punjabi', 'Tamil'];

export default function OnboardArtistPage() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: '',
      bio: '',
      category: [],
      languages: [],
      feeRange: '',
      location: '',
      image: null,
    },
  });

  const onSubmit = (data: any) => {
    console.log("Submitted Data:", data);
    console.log("Uploaded Image File:", data.image);
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Artist Onboarding</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <input {...register("name")} placeholder="Name" className="border p-2 w-full" />
          {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
        </div>

        <div>
          <textarea {...register("bio")} placeholder="Bio" className="border p-2 w-full" />
          {errors.bio && <p className="text-red-500 text-sm">{errors.bio.message}</p>}
        </div>

        <fieldset className="border p-4">
          <legend>Category</legend>
          {categories.map(cat => (
            <label key={cat} className="block">
              <input type="checkbox" value={cat} {...register("category")} /> {cat}
            </label>
          ))}
          {errors.category && <p className="text-red-500 text-sm">{errors.category.message}</p>}
        </fieldset>

        <fieldset className="border p-4">
          <legend>Languages Spoken</legend>
          {languages.map(lang => (
            <label key={lang} className="block">
              <input type="checkbox" value={lang} {...register("languages")} /> {lang}
            </label>
          ))}
          {errors.languages && <p className="text-red-500 text-sm">{errors.languages.message}</p>}
        </fieldset>

        <div>
          <select {...register("feeRange")} className="border p-2 w-full">
            <option value="">Select Fee Range</option>
            <option value="Below ₹10,000">Below ₹10,000</option>
            <option value="₹10,000 - ₹20,000">₹10,000 - ₹20,000</option>
            <option value="Above ₹20,000">Above ₹20,000</option>
          </select>
          {errors.feeRange && <p className="text-red-500 text-sm">{errors.feeRange.message}</p>}
        </div>

        <fieldset className="border p-4">
          <legend>Profile Image (optional)</legend>
          <Controller
            name="image"
            control={control}
            defaultValue={null}
            render={({ field }) => (
              <input
                type="file"
                accept="image/*"
                onChange={(e) => field.onChange(e.target.files?.[0] || null)}
                className="block"
              />
            )}
          />
        </fieldset>

        <div>
          <input {...register("location")} placeholder="Location" className="border p-2 w-full" />
          {errors.location && <p className="text-red-500 text-sm">{errors.location.message}</p>}
        </div>

        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Submit</button>
      </form>
    </div>
  );
}
