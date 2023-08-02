import React from 'react'

export default function FaqServiceArea() {
  return (
    <div>
    <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        How do I choose the right size of split system for my room?
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
       <p>1. <strong>Measure the Room:</strong> First, measure the length and width of your room in meters. Multiply these two numbers to find the room's square footage (m²).</p>
       <p>2. <strong>Consider Room Characteristics:</strong> Think about factors that might affect the room's cooling needs, such as the number of windows, the amount of sunlight that enters, and the level of insulation.</p>
       <p>
       3. <strong>Use a Cooling Capacity Chart:</strong> Refer to our cooling capacity located within the description of our advertised air conditioner. This will help you match the room size (in m²) to the appropriate cooling capacity (measured in kilowatts - kW) of the split system.
       </p>
       <p>
       4. <strong>Choose the Right Size:</strong> Based on the chart, select a split system with a cooling capacity that matches or slightly exceeds the room size. Avoid getting an oversized unit, as it may lead to wasteful energy consumption and discomfort. On the other hand, an undersized unit may struggle to cool the room adequately.
       </p>
       <p>
       5. <strong>Seek Professional Advice:</strong> If you're unsure about the calculations or which size to choose, contact us for expert guidance and assistance in selecting the right split system size. please reach out to our team. We are here to help you make the best decision for your cooling needs and ensure your comfort throughout the year.
       </p>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        What is the difference between a split system and a ducted air conditioning system?
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
       <p><strong><u>1. Distribution of Conditioned Air:</u></strong> 
       <ul className='ml-3 mt-1'>
       <li><strong>Split System:</strong> A split system air conditioner consists of two main units: the indoor unit (evaporator) and the outdoor unit (condenser). The indoor unit is installed in the room to be cooled, while the outdoor unit is placed outside. The two units are connected by refrigerant lines. The split system cools individual rooms or zones, providing localized temperature control.</li>

       <li><strong>Ducted Air Conditioning:</strong> A ducted air conditioning system, on the other hand, uses a central indoor unit connected to a network of ducts throughout the building. The conditioned air is distributed through these ducts and delivered to multiple rooms or areas in the property. This system allows for centralized temperature control and uniform cooling in all connected spaces</li>
       </ul>
       </p>
       <div>
       <p><strong><u>2. Cooling Scope:</u></strong>
       <ul className='ml-3 mt-1'>
       <li><strong>Split System:</strong> Split systems are ideal for cooling individual rooms or specific areas. They are suitable for smaller spaces, apartments, or homes where cooling needs are limited to a few rooms.</li>
       <li>
        <strong>Ducted Air Conditioning:</strong> Ducted systems are designed to cool larger areas, entire homes, or commercial buildings. They provide comprehensive climate control for the entire property, allowing occupants to adjust temperatures in multiple rooms simultaneously.
       </li>
       </ul>
       </p>
       <p><strong><u>3. Control and Zoning:</u></strong>
        <ul className='ml-3 mt-1'>
        <li><strong>Split System:</strong> Each indoor unit in a split system operates independently, providing separate temperature control for each room or zone where the units are installed. This means you can adjust the cooling level according to the specific needs of each area.</li>
        <li><strong>Ducted Air Conditioning:</strong> Ducted systems offer central control, typically with a single thermostat or control panel, allowing users to set the desired temperature for the entire property. Some ducted systems also offer zoning capabilities, allowing users to divide the property into zones and control temperatures independently in each zone.</li>
        </ul>
       </p>
       <p>
       <strong><u>4. Installation and Aesthetics:</u></strong>
       <ul className='ml-3 mt-1'>
       <li><strong>Split System:</strong> The installation of split systems is generally simpler and less invasive, as it does not require extensive ductwork. It is a popular choice when ducted installation is not feasible or cost-effective. The indoor units can be wall-mounted or ceiling-mounted, depending on the design and preferences.</li>
       <li>
       <strong>Ducted Air Conditioning:</strong> Ducted systems require the installation of ductwork throughout the property, which can be more complex and may involve some renovation work. The main advantage is that ducted systems offer a discreet and aesthetically pleasing cooling solution, as the air vents are usually hidden in the ceiling or walls.
       </li>
       </ul>
       </p>
       
       </div>

      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        What is the warranty coverage for the air conditioner and installation?
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
       <p><strong>1. Manufacturer's Warranty:</strong> This is the standard warranty provided by the air conditioner manufacturer and covers any defects in materials or workmanship. The duration of the manufacturer's warranty can range from 5 to 7 years, depending on the brand and model. During the warranty period, the manufacturer will repair or replace any faulty components at no cost to the customer.</p>

       <p><strong>Installation Warranty: </strong>  At Home Comfort Air, we are proud to offer a 5-year installation warranty for workmanship on all of our new air conditioning installations. Our 5-year warranty covers any defects or issues that may arise due to faulty installation. This includes issues such as leaks, improper refrigerant charging, and incorrect wiring. If any of these issues occur within the 5-year warranty period, we will repair or replace the affected parts at no additional cost to the customer.</p>
      </div>
    </div>
  </div>
</div>
    
    </div>
  )
}
