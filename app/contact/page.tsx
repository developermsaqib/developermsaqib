import { SectionTitle } from "../../components/SectionTitle";
import ContactForm from "../../components/ContactForm";

export default function ContactPage() {
return (
<main className="mt-16">
<SectionTitle title="Contact" />
<p className="mb-4 text-gray-700">Feel free to reach out.</p>


<div className="max-w-xl">
  <ContactForm />
</div>
</main>
);
}