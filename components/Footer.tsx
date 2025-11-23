// type Props = {
//   email: string;
//   github: string;
//   linkedin: string;
// };

// export default function Footer({ email, github, linkedin }: Props) {
//   return (
//     <footer className="bg-gray-100 dark:bg-gray-900 py-6 mt-12">
//       <div className="container mx-auto text-center space-x-4">
//         <a href={github} target="_blank" className="hover:text-primary">
//           GitHub
//         </a>
//         <a href={linkedin} target="_blank" className="hover:text-primary">
//           LinkedIn
//         </a>
//         <a href={`mailto:${email}`} className="hover:text-primary">
//           Email
//         </a>
//       </div>
//       <p className="text-center mt-4 text-sm">
//         &copy; {new Date().getFullYear()} Msaqib
//       </p>
//     </footer>
//   );
// }


export default function Footer() {
return (
<footer className="py-10 mt-20 text-center text-sm text-gray-600">
© {new Date().getFullYear()} Muhammad Saqib
</footer>
);
}