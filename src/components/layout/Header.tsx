// import React from 'react';

// export const Header: React.FC = () => {
//   return (
//     <header className="bg-blue-800 text-white  flex justify-between items-center shadow-md z-10">
//       {/* Sales - 35% */}
//       <div className="font-bold text-lg w-[35.1%] text-center">Sales</div>
      
//       {/* Item Category - 35% */}
//       <div className="font-bold text-lg w-[20.8%] text-center border-l border-gray-500">Item Category</div>
      
//       {/* Item Details - 20% */}
//       <div className="font-bold text-lg w-[37.5%] text-center border-l border-gray-500">Item Details</div>
      
//       {/* Settings & Profile - 10% */}
//       <div className="font-bold text-lg w-[7%] text-center border-l border-gray-500 flex justify-center gap-3">
//         <span className="cursor-pointer hover:bg-blue-700 p-1 rounded transition-colors">⚙️</span>
//         <span className="cursor-pointer hover:bg-blue-700 p-1 rounded transition-colors">👤</span>
//       </div>
//     </header>
//   );
// };


import React from 'react';

interface HeaderProps {
  onLogout?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onLogout }) => {
  return (
    <header className="bg-blue-800 text-white flex justify-between items-center shadow-md z-10">
      {/* Sales - 35% */}
      <div className="font-bold text-lg w-[35.1%] text-center">Sales</div>
      
      {/* Item Category - 35% */}
      <div className="font-bold text-lg w-[20.8%] text-center border-l border-gray-500">Item Category</div>
      
      {/* Item Details - 20% */}
      <div className="font-bold text-lg w-[37.5%] text-center border-l border-gray-500">Item Details</div>
      
      {/* Settings & Profile - 10% */}
      <div className="font-bold text-lg w-[7%] text-center border-l border-gray-500 flex justify-center gap-3">
        <span className="cursor-pointer hover:bg-blue-700 p-1 rounded transition-colors">⚙️</span>
        <span 
          className="cursor-pointer hover:bg-blue-700 p-1 rounded transition-colors"
          onClick={onLogout}
          title="Logout"
        >
          👤
        </span>
      </div>
    </header>
  );
};