//enum타입을 사용하여 파라미터에 잘못된 값이 들어가더라도 에러가 발생하지 x
//전화번호부 유형 (home,office,studio)을 enum타입으로 선언
enum PhoneType {
  Home = 'home',
  Office = 'office',
  Studio = 'studio',
}

interface PhoneNumberDictionary {
  [phone: string]: {
    num: number;
  };
}

interface Contact {
  name: string;
  address: string;
  phones: PhoneNumberDictionary;
}

// api
// TODO: 아래 함수의 반환 타입을 지정해보세요.
//Promise는 인터페이스로 정의되어 있고 제네릭 타입을 받을 수 있음.(Promise에 커서 올리고 ctrl+마우스왼쪽 누르면 Promise객체의 타입 정의 보기 가능)
//제네릭으로 정의된 T를 .then()안에서 T로 받음
function fetchContacts(): Promise<Contact[]> {
  // TODO: 아래 변수의 타입을 지정해보세요.
  const contacts: Contact[] = [
    {
      name: 'Tony',
      address: 'Malibu',
      phones: {
        home: {
          num: 11122223333,
        },
        office: {
          num: 44455556666,
        },
      },
    },
    {
      name: 'Banner',
      address: 'New York',
      phones: {
        home: {
          num: 77788889999,
        },
      },
    },
    {
      name: '마동석',
      address: '서울시 강남구',
      phones: {
        home: {
          num: 213423452,
        },
        studio: {
          num: 314882045,
        },
      },
    },
  ];
  return new Promise(resolve => {
    setTimeout(() => resolve(contacts), 2000);
  });
}

// main
class AddressBook {
  // TODO: 아래 변수의 타입을 지정해보세요.
  contacts: Contact[] = [];

  constructor() {
    this.fetchData();
  }

  fetchData(): void {
    fetchContacts().then(response => {
      this.contacts = response;
    });
  }

  /* TODO: 아래 함수들의 파라미터 타입과 반환 타입을 지정해보세요 */

  findContactByName(name: string): Contact[] {
    return this.contacts.filter(contact => contact.name === name); //this.contacts는 클래스 속성 contacts를 가르킴
  }

  findContactByAddress(address: string): Contact[] {
    return this.contacts.filter(contact => contact.address === address);
  }

  findContactByPhone(phoneNumber: number, phoneType: PhoneType): Contact[] {
    return this.contacts.filter(
      contact => contact.phones[phoneType].num === phoneNumber
    );
  }

  addContact(contact: Contact): void {
    this.contacts.push(contact);
  }

  displayListByName(): string[] {
    return this.contacts.map(contact => contact.name);
  }

  displayListByAddress(): string[] {
    return this.contacts.map(contact => contact.address);
  }
  /* ------------------------------------------------ */
}

const book = new AddressBook();

//두 번째 파라미터 타입에 enum타입을 넣어주어야 함
book.findContactByPhone(11122223333, PhoneType.Home);
