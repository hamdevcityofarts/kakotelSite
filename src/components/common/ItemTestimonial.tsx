import Image from 'next/image';
import { twMerge } from 'tailwind-merge';
import { Testimonial } from '~/shared/types';
import DividerLine from './DividerLine';

const ItemTestimonial = ({
  name,
  job,
  testimonial,
  image,
  isTestimonialUp,
  hasDividerLine,
  startSlice,
  endSlice,
  containerClass,
  panelClass,
  imageClass,
  dataClass,
  nameJobClass,
  nameClass,
  jobClass,
  testimonialClass,
}: Testimonial) => {
  return (
    <div className={twMerge(`select-none`, containerClass)}>
      <div className={twMerge(`flex ${isTestimonialUp ? 'flex-col-reverse' : 'flex-col'}`, panelClass)}>
        {((image && name) || (name && job)) && (
          <>
            <div className={twMerge('flex items-center', dataClass)}>
              

              <div className={twMerge('flex flex-col justify-center', nameJobClass)}>
                {name && <h3 className={twMerge('font-semibold', nameClass)}>{name}</h3>}
                {job && <span className={twMerge('dark:text-slate-400', jobClass)}>{job}</span>}
              </div>
            </div>

            {hasDividerLine && <DividerLine />}
          </>
        )}

        {testimonial && (
          <blockquote className={twMerge('flex-auto', testimonialClass)}>
            <p className="font-light dark:text-slate-400">
              {startSlice !== undefined && endSlice !== undefined
                ? `" ${testimonial.slice(Number(startSlice), Number(endSlice))}... "`
                : `" ${testimonial} "`}
            </p>
          </blockquote>
        )}
      </div>
    </div>
  );
};

export default ItemTestimonial;
