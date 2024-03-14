import ContactPage from '@/components/ContactPage'

/**
  * @type {import("next").Metadata}
 */
export const metadata = {
  title: 'Contact',
  description: 'Contact de l\'equipe CarTuningShow.',
  openGraph:{
    title:'Contact',
    description:'Page contact de l\'equipe qui propose des évenement de tuning automobile.',
    images:['/logo.png']
  },  
}

function ContactFormpage() {
  return <>
  <ContactPage></ContactPage>
  </>
}

export default ContactFormpage;
