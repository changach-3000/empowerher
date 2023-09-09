import React, { useState } from 'react';

function Shelters() {
  const [selectedLocation, setSelectedLocation] = useState('Nairobi');
  
  // Sample hospital data for each location
  const hospitalsData = {
   
    Nairobi: [
        {
          name: 'Shelter Women of Kenya',
          location: 'Nairobi',
          contact: 'Phone: 051 2212720| Email: info.nkr@medihealgroup.com',
          image: 'https://media.wbur.org/wp/2020/02/0204_regional-homelessness02-1.jpg' ,
          desc: 'The hospital provides a welcoming and attractive environment for its patients. It offers cost-effective health care services. It provides international standard medical services.The maternity wing is well-equipped. It offers the best child delivery experience.'
        },
        {
            name: 'Young Women Christian Organisation',
            location: 'PV46+XR5, Opposite City Council Offices, Eastlands Cres, Nairobi',
            contact: 'Phone: 020 724789 | Email: kiambu@example.com',
            image: 'https://www.heraldnet.com/wp-content/uploads/2022/01/27924552_web1_L4-INSLEE-PALLET-SHELTER-060721-FS.jpg',
            desc: 'The hospital’s maternity package is designed to take some financial risk out of having a baby. The maternity charges range from as low as Sh.30, 000 for normal delivery.The hospital offers a fully-fledged maternity wing. Payment can also be done in installments.'
          },
          {
            name: 'Grey Shelter Organisation',
            location: 'Nairobi',
            contact: 'Phone: 051 2210243 | Email: kiambu@example.com',
            image: 'https://www.masslive.com/resizer/qIHcKxctpNrfyEDrV2K7mWBDqrg=/arc-anglerfish-arc2-prod-advancelocal/public/UFEJCHJATNHIJJP74Z45ID4K4Y.jpeg',
            desc: 'The hospital offers pretty reasonable and affordable maternity charges. The hospital’s maternity care covers everything from labor and delivery to newborn care.'
          },
          {
            name: 'Shelter Of Hope Nairobi',
            location: 'Nairobi',
            contact: 'Phone: 0737 212999 | Email: Afraha@example.com',
            image: 'https://media.wbur.org/wp/2020/02/0204_regional-homelessness02-1.jpg',
            desc: 'The hospital is located in a serene environment that is favorable to its patients. It offers modern maternity services with affordable maternity charges.'
          },
      ],
    // kiambu
    Kiambu: [
        {
          name: 'NewLife Home Trust',
          location: 'Town East, Nakuru',
          contact: 'Phone: 051 2212720| Email: info.nkr@medihealgroup.com',
          image: 'https://www.redcross.org/content/dam/redcross/local/news-articles/south-florida/Shelter-Cuero-Texas-Hurricane-Harvey.jpeg.transform/1288/q70/feature/image.jpeg' ,
          desc: 'The hospital provides a welcoming and attractive environment for its patients. It offers cost-effective health care services. It provides international standard medical services.The maternity wing is well-equipped. It offers the best child delivery experience.'
        },
        {
            name: 'Love and Hope Center',
            location: '20100, Nakuru',
            contact: 'Phone: 0703 898449 | Email: kiambu@example.com',
            image: 'https://www.heraldnet.com/wp-content/uploads/2022/01/27924552_web1_L4-INSLEE-PALLET-SHELTER-060721-FS.jpg',
            desc: 'The hospital’s maternity package is designed to take some financial risk out of having a baby. The maternity charges range from as low as Sh.30, 000 for normal delivery.The hospital offers a fully-fledged maternity wing. Payment can also be done in installments.'
          },
          {
            name: 'Women Like Us center',
            location: 'M3RG+XGP, Nakuru',
            contact: 'Phone: 051 2210243 | Email: kiambu@example.com',
            image: 'https://www.masslive.com/resizer/qIHcKxctpNrfyEDrV2K7mWBDqrg=/arc-anglerfish-arc2-prod-advancelocal/public/UFEJCHJATNHIJJP74Z45ID4K4Y.jpeg',
            desc: 'The hospital offers pretty reasonable and affordable maternity charges. The hospital’s maternity care covers everything from labor and delivery to newborn care.'
          },
          {
            name: 'Children Rescue Center',
            location: 'Nakuru',
            contact: 'Phone: 0737 212999 | Email: Afraha@example.com',
            image: 'https://media.wbur.org/wp/2020/02/0204_regional-homelessness02-1.jpg',
            desc: 'The hospital is located in a serene environment that is favorable to its patients. It offers modern maternity services with affordable maternity charges.'
          },
      ],
// Nakuru Hospitals
    Nakuru: [
        {
          name: 'NewLife Home Trust',
          location: 'Town East, Nakuru',
          contact: 'Phone: 051 2212720| Email: info.nkr@medihealgroup.com',
          image: 'https://www.redcross.org/content/dam/redcross/local/news-articles/south-florida/Shelter-Cuero-Texas-Hurricane-Harvey.jpeg.transform/1288/q70/feature/image.jpeg' ,
          desc: 'The hospital provides a welcoming and attractive environment for its patients. It offers cost-effective health care services. It provides international standard medical services.The maternity wing is well-equipped. It offers the best child delivery experience.'
        },
        {
            name: 'Love and Hope Center',
            location: '20100, Nakuru',
            contact: 'Phone: 0703 898449 | Email: kiambu@example.com',
            image: 'https://www.heraldnet.com/wp-content/uploads/2022/01/27924552_web1_L4-INSLEE-PALLET-SHELTER-060721-FS.jpg',
            desc: 'The hospital’s maternity package is designed to take some financial risk out of having a baby. The maternity charges range from as low as Sh.30, 000 for normal delivery.The hospital offers a fully-fledged maternity wing. Payment can also be done in installments.'
          },
          {
            name: 'Women Like Us center',
            location: 'M3RG+XGP, Nakuru',
            contact: 'Phone: 051 2210243 | Email: kiambu@example.com',
            image: 'https://www.masslive.com/resizer/qIHcKxctpNrfyEDrV2K7mWBDqrg=/arc-anglerfish-arc2-prod-advancelocal/public/UFEJCHJATNHIJJP74Z45ID4K4Y.jpeg',
            desc: 'The hospital offers pretty reasonable and affordable maternity charges. The hospital’s maternity care covers everything from labor and delivery to newborn care.'
          },
          {
            name: 'Children Rescue Center',
            location: 'Nakuru',
            contact: 'Phone: 0737 212999 | Email: Afraha@example.com',
            image: 'https://media.wbur.org/wp/2020/02/0204_regional-homelessness02-1.jpg',
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
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
        <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-1">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-pink-900 dark:text-white">Shelters</h2>
          <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">These are some of the shelters that are close to you and within access that are assured to provide great care for you and for your child.</p>
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

export default Shelters;