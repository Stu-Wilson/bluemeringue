import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Page"
        description="Please use the email address below to contact me"
      />

      <Contact />
    </>
  );
};

export default ContactPage;
