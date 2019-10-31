import React from 'react'
import Footer from './Footer'

const MyContactList = [
    {
        name: 'Marie GORY',
        linkedIn:'https://www.linkedin.com/in/marie-gory/'
    },
    {
        name: 'Loic FOLIO',
        linkedIn:'https://www.linkedin.com/in/loic-Folio/'
    },
    {
        name: 'Kevin THOMANN',
        linkedIn:'https://effinamazing.com/wp-content/uploads/2015/06/Linkedin-Advertising.png'
    },
    {
        name: 'Issam ',
        linkedIn:'https://www.linkedin.com/in/issam-adam/'
    },
    {
        name: 'Stevie CUTMAN',
        linkedIn:'https://www.linkedin.com/in/stevie-cutman-0108b7194/'
    }
]
 const ContactList= () => {
     return (
         <div>
             {MyContactList.map(e =>
                <Footer {...e} />)}
         </div>
     )
 }
export default ContactList;