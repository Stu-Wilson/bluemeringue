import AboutSectionOne from "@/components/About/AboutSectionOne";
import Breadcrumb from "@/components/Common/Breadcrumb";

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Me"
        description="My name's Stuart. I am a vastly experienced, focussed software engineer using the Microsoft stack, with previous involvement on a wide range of projects for a multitude of different clients. I always bring my passion for learning new technologies and am always looking for new ways to apply them to the current situation. I use my full range of skills to deliver well coded, highly maintainable solutions to deadlines and budget."
      />
      <AboutSectionOne />
    </>
  );
};

export default AboutPage;
