import React, { useState } from 'react';

function Hospitals() {
  const [selectedLocation, setSelectedLocation] = useState('Nairobi');
  
  // Sample hospital data for each location
  const hospitalsData = {
   
    Nairobi: [
      {
        name: 'Nairobi Womens Hospital',
        location: 'Nairobi',
        contact: 'Phone: +254-XXX-XXXX | Email: nairobi@example.com',
        image: 'https://www.eahealth.org/sites/www.eahealth.org/files/content/organisations/images/2018-05-20/women.png',
        desc: 'The hospital is located in a serene environment that is favorable to its patients. It offers modern maternity services with affordable maternity charges.'
      },
      
      {
        name: 'Coptic Hospital',
        location: 'Nairobi',
        contact: 'Phone: +254-XXX-XXXX | Email: nairobi@example.com',
        image: 'https://netstorage-tuko.akamaized.net/images/3314d1c812dc9d0e.jpg?imwidth=900',
        desc: 'The hospital is located in a serene environment that is favorable to its patients. It offers modern maternity services with affordable maternity charges.'
      },
      {
        name: 'Jacaranda Maternity',
        location: 'Nairobi',
        contact: 'Phone: +254-XXX-XXXX | Email: nairobi@example.com',
        image: 'https://onedaktari.com/wp-content/uploads/2023/07/Jacaranda-Maternity-Hospital.png',
        desc: 'The hospital is located in a serene environment that is favorable to its patients. It offers modern maternity services with affordable maternity charges.'
      },
      {
        name: 'Nairobi West Hospital',
        location: 'Nairobi',
        contact: 'Phone: +254-XXX-XXXX | Email: nairobi@example.com',
        image: 'https://nnmedia.nation.africa/uploads/2021/11/Ambulance-chopper.gif',
        desc: 'The hospital is located in a serene environment that is favorable to its patients. It offers modern maternity services with affordable maternity charges.'
      },
    ],
    // kiambu
    Kiambu: [
      {
        name: 'Kiambu County Referral Hospital',
        location: 'Kiambu',
        contact: 'Phone: +254-XXX-XXXX | Email: kiambu@example.com',
        image: 'https://www.kenyanews.go.ke/wp-content/uploads/2020/12/IMG_74741-1200x630.jpg',
        desc: 'The hospital is located in a serene environment that is favorable to its patients. It offers modern maternity services with affordable maternity charges.'
      },
      {
        name: 'Nazareth Hospital',
        location: 'Kiambu',
        contact: 'Phone: +254-XXX-XXXX | Email: kiambu@example.com',
        image: 'https://www.kenyanews.go.ke/wp-content/uploads/2023/03/level.png',
        desc: 'The hospital is located in a serene environment that is favorable to its patients. It offers modern maternity services with affordable maternity charges.'
      },
      {
        name: 'Kalimoni Mission Hospital',
        location: 'Kiambu',
        contact: 'Phone: +254-XXX-XXXX | Email: kiambu@example.com',
        image: 'https://healthdigest.co.ke/wp-content/uploads/jet-engine-forms/1/2022/10/jmh.jpg',
        desc: 'The hospital is located in a serene environment that is favorable to its patients. It offers modern maternity services with affordable maternity charges.'
      },
      {
        name: 'Thika Hospital Level 5',
        location: 'Kiambu',
        contact: 'Phone: +254-XXX-XXXX | Email: kiambu@example.com',
        image: 'https://www.kenyanews.go.ke/wp-content/uploads/2023/03/level.png',
        desc: 'The hospital is located in a serene environment that is favorable to its patients. It offers modern maternity services with affordable maternity charges.'
      },
     
    ],
// Nakuru Hospitals
    Nakuru: [
        {
          name: 'Mediheal Group of Hospitals',
          location: 'Nairobi-Nakuru Highway.',
          contact: 'Phone: 0717 877865| Email: info.nkr@medihealgroup.com',
          image: 'https://medihealgroup.com/wp-content/uploads/2020/04/1L2A0889-720x480.jpg' ,
          desc: 'The hospital provides a welcoming and attractive environment for its patients. It offers cost-effective health care services. It provides international standard medical services.The maternity wing is well-equipped. It offers the best child delivery experience.'
        },
        {
            name: 'Nairobi Womens Hospital Nakuru',
            location: 'Nakuru town Cbd',
            contact: 'Phone: 0713113499 | Email: kiambu@example.com',
            image: 'https://nnmedia.nation.africa/uploads/2018/10/NnNairobiwomenhospital2.jpg',
            desc: 'The hospital’s maternity package is designed to take some financial risk out of having a baby. The maternity charges range from as low as Sh.30, 000 for normal delivery.The hospital offers a fully-fledged maternity wing. Payment can also be done in installments.'
          },
          {
            name: 'Nakuru Maternity & Nursing Home',
            location: 'Shadrack Kimalel road, Nakuru.',
            contact: 'Phone: 051 2210243 | Email: kiambu@example.com',
            image: 'https://nnh.co.ke/images/2021/02/17/outpatient.jpg',
            desc: 'The hospital offers pretty reasonable and affordable maternity charges. The hospital’s maternity care covers everything from labor and delivery to newborn care.'
          },
          {
            name: 'Afraha Maternity & Nursing Home.',
            location: 'Near Nakurus Afraha Stadium.',
            contact: 'Phone: 0737372849 | Email: Afraha@example.com',
            image: 'https://www.babylovenetwork.com/maternity/wp-content/uploads/sites/9/2021/01/Afraha.jpg',
            desc: 'The hospital is located in a serene environment that is favorable to its patients. It offers modern maternity services with affordable maternity charges.'
          },
      ],
      Kirinyaga:[], 
      Mombasa:[], 
      Kilifi:[],
      Lodwar:[],
      Marakwet:[],
      UasinGishu:[]
    
  };

  const handleChangeLocation = (event) => {
    setSelectedLocation(event.target.value);
  };

  return (
    <section className="bg-pink-200 dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-1">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-pink-900 dark:text-white">Hospitals</h2>
          <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">These are some of the hospitals that are close to you and within access that are assured to provide great care for you and for your child.</p>
        </div>
        <div className="mb-4 text-center">
          <label htmlFor="locationDropdown" className="text-gray-700 dark:text-white mr-2 px-3 py-3">Select Location:</label>
          <select
            id="locationDropdown"
            className="border rounded-lg px-3 py-3"
            value={selectedLocation}
            onChange={handleChangeLocation}
          >
            {Object.keys(hospitalsData).map((location) => (
              <option key={location} value={location}>
                {location}
              </option>
            ))}
          </select>
        </div>
        <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
          {hospitalsData[selectedLocation].map((hospital, index) => (
            <div key={index} className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src={hospital.image} alt={`Hospital ${index + 1}`} />
                <div className="p-4">
                  <p className="text-pink-900 dark:text-white font-semibold text-lg">{hospital.name}</p>
                  <p className="text-pink-700 dark:text-gray-300">{hospital.location}</p>
                  <p className="text-pink-700 dark:text-gray-300">{hospital.contact}</p>
                  <p className="text-gray-700 dark:text-gray-300 font-light">{hospital.desc}</p>
                  
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hospitals;