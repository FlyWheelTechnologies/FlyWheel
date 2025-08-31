import { forwardRef } from "react";


const Section = forwardRef(function Section({ id, className = "", children }, ref) {
return (
<section
id={id}
ref={ref}
className={`relative ${className}`}
role="region"
aria-label={id}
>
{children}
</section>
);
});


export default Section;