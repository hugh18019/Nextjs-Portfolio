import React from 'react';

const getTabContent = (content, className) =>
  content.split(',').map((c, i) => (
    <li key={`tab-content-${i}`}>
      <p className={`mr-3 font-semibold ${className} hover:text-white `}>{c}</p>
    </li>
  ));

const TabButton = ({ activeTab, name, selectTab, content }) => {
  // const active = activeTab === name;
  // const className = active
  //   ? 'text-black border-b border-black-100'
  //   : 'text-[#ADB7BE]';
  return (
    <button onClick={selectTab}>
      <p className='mr-3 font-semibold text-amber-300 hover:text-white'>
        {name}
      </p>
      {/* {active && <ul>{getTabContent(content, className)}</ul>} */}
    </button>
  );
};

export default TabButton;
