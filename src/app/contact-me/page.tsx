import ContactForm from "./components/ContactForm";
import InfoSection from "./components/InfoSection";

const ContactMePage = () => {
  return (
    <div className="grid laptop:grid-cols-2 grid-cols-1 h-full">
      <div className="border-r border-border-color h-full w-full">
        <ContactForm />
      </div>
      <div>
        <InfoSection />
      </div>
    </div>
  );
};

export default ContactMePage;
