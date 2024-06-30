import { ContactLink, ContactList } from './Contacts.styles';

export default function Contacts() {
  return (
    <ContactList>
      <li>
        <ContactLink href="mailto: campsukraine@gmail.com">
          campsukraine@gmail.com
        </ContactLink>
      </li>
      <li>
        <ContactLink href="tel:+380670000000">+38 067 000 00 00</ContactLink>
      </li>
    </ContactList>
  );
}
