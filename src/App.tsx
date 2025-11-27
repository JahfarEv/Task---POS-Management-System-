// import React, { useState } from "react";
// import { Header } from "./components/layout/Header";
// import { Toast } from "./components/common/Toast";
// import { SalesPanel } from "./components/sales/SalesPanel";
// import { CategoryPanel } from "./components/products/CategoryPanel";
// import { ProductGrid } from "./components/products/ProductGrid";
// import { ActionBar } from "./components/layout/ActionBar";
// import { useCart } from "./hooks/useCart";
// import { useProducts } from "./hooks/useProducts";

// const App = () => {
//   const { addToCart } = useCart();
//   const {
//     categories,
//     selectedCategory,
//     setSelectedCategory,
//     filteredProducts,
//   } = useProducts();
//   const [showToast, setShowToast] = useState(true);

//   React.useEffect(() => {
//     const timer = setTimeout(() => {
//       setShowToast(false);
//     }, 3000);

//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <div className="flex flex-col h-screen bg-gray-100 font-sans text-sm overflow-hidden">
//       <Header />

//       <Toast message="Login Success" type="success" isVisible={showToast} />

//       <div className="flex flex-1 overflow-hidden">
//         <SalesPanel />

//         <div className="w-[65%] flex flex-col">
//           <div className="flex-1 flex overflow-hidden">
//             <CategoryPanel
//               categories={categories}
//               selectedCategory={selectedCategory}
//               onCategorySelect={setSelectedCategory}
//             />

//             <ProductGrid
//               products={filteredProducts}
//               onAddToCart={addToCart}
//               itemsPerPage={16} 
//             />
//           </div>

//           <ActionBar />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;


// import  { useState } from "react";
// import { Header } from "./components/layout/Header";
// import { Toast } from "./components/common/Toast";
// import { SalesPanel } from "./components/sales/SalesPanel";
// import { CategoryPanel } from "./components/products/CategoryPanel";
// import { ProductGrid } from "./components/products/ProductGrid";
// import { ActionBar } from "./components/layout/ActionBar";
// import LoginPage from "./components/auth/Login";
// import { useCart } from "./hooks/useCart";
// import { useProducts } from "./hooks/useProducts";

// const App = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [showToast, setShowToast] = useState(false);
  
//   const { addToCart } = useCart();
//   const {
//     categories,
//     selectedCategory,
//     setSelectedCategory,
//     filteredProducts,
//   } = useProducts();

//   const handleLoginSuccess = () => {
//     setIsLoggedIn(true);
//     setShowToast(true);
    
//     setTimeout(() => {
//       setShowToast(false);
//     }, 3000);
//   };

//   const handleLogout = () => {
//     setIsLoggedIn(false);
//   };

//   // Show login page if not logged in
//   if (!isLoggedIn) {
//     return <LoginPage onLoginSuccess={handleLoginSuccess} />;
//   }

//   return (
//     <div className="flex flex-col h-screen bg-gray-100 font-sans text-sm overflow-hidden">
//       <Header onLogout={handleLogout} />

//       <Toast message="Login Success" type="success" isVisible={showToast} />

//       <div className="flex flex-1 overflow-hidden">
//         <SalesPanel />

//         <div className="w-[65%] flex flex-col">
//           <div className="flex-1 flex overflow-hidden">
//             <CategoryPanel
//               categories={categories}
//               selectedCategory={selectedCategory}
//               onCategorySelect={setSelectedCategory}
//             />

//             <ProductGrid
//               products={filteredProducts}
//               onAddToCart={addToCart}
//               itemsPerPage={16} 
//             />
//           </div>

//           <ActionBar />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;




import { useState } from "react";
import { Header } from "./components/layout/Header";
import { Toast } from "./components/common/Toast";
import { SalesPanel } from "./components/sales/SalesPanel";
import { CategoryPanel } from "./components/products/CategoryPanel";
import { ProductGrid } from "./components/products/ProductGrid";
import { ActionBar } from "./components/layout/ActionBar";
import LoginPage from "./components/auth/Login"; // Make sure this path is correct
import { useCart } from "./hooks/useCart";
import { useProducts } from "./hooks/useProducts";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showToast, setShowToast] = useState(false);
  
  const { addToCart } = useCart();
  const {
    categories,
    selectedCategory,
    setSelectedCategory,
    filteredProducts,
  } = useProducts();

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    setShowToast(true);
    
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  // Show login page if not logged in
  if (!isLoggedIn) {
    return <LoginPage onLoginSuccess={handleLoginSuccess} />;
  }

  return (
    <div className="flex flex-col h-screen bg-gray-100 font-sans text-sm overflow-hidden">
      <Header onLogout={handleLogout} />

      <Toast message="Login Success" type="success" isVisible={showToast} />

      <div className="flex flex-1 overflow-hidden">
        <SalesPanel />

        <div className="w-[65%] flex flex-col">
          <div className="flex-1 flex overflow-hidden">
            <CategoryPanel
              categories={categories}
              selectedCategory={selectedCategory}
              onCategorySelect={setSelectedCategory}
            />

            <ProductGrid
              products={filteredProducts}
              onAddToCart={addToCart}
              itemsPerPage={16} 
            />
          </div>

          <ActionBar />
        </div>
      </div>
    </div>
  );
};

export default App;