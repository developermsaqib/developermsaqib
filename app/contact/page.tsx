import { SectionTitle } from "../../components/SectionTitle";


export default function ContactPage() {
return (
<main className="mt-16">
<SectionTitle title="Contact" />
<p className="mb-4 text-gray-700">Feel free to reach out.</p>


<form className="space-y-4 max-w-md">
<input type="text" placeholder="Your Name" className="w-full border p-3 rounded-lg" />
<input type="email" placeholder="Your Email" className="w-full border p-3 rounded-lg" />
<textarea placeholder="Message" rows={4} className="w-full border p-3 rounded-lg"></textarea>
<button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Send</button>
</form>
</main>
);
}