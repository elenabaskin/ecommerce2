// import React, { Fragment, useState } from 'react';
// import { Dialog, Transition } from '@headlessui/react';
// import { XMarkIcon } from '@heroicons/react/24/outline';
// import { Link } from 'react-router-dom';

// const products = [
//   {
//     id: 1,
//     name: 'custom notebook',
//     href: '#products',
//     brand: 'gentle',
//     price: '$20',
//     quantity: 1,
//     imageSrc:
//       'https://i.pinimg.com/564x/bc/25/c6/bc25c6e2550a1f1951a650a572b22f40.jpg',
//     imageAlt: 'custom notebook',
//   },
//   {
//     id: 2,
//     name: 'ceramic planters',
//     href: '#products',
//     brand: 'kanso',
//     price: '$40',
//     quantity: 1,
//     imageSrc:
//       'https://i.pinimg.com/564x/a4/05/e6/a405e6e16293caf4ea3b22be2f91dc56.jpg',
//     imageAlt: 'pastel yellow ceramic planters',
//   },
//   // More products...
// ];

// export default function Example() {
//   const [open, setOpen] = useState(true);

//   return (
//     <Transition.Root show={open} as={Fragment}>
//       <Dialog as="div" className="relative z-10" onClose={setOpen}>
//         <Transition.Child
//           as={Fragment}
//           enter="ease-in-out duration-500"
//           enterFrom="opacity-0"
//           enterTo="opacity-100"
//           leave="ease-in-out duration-500"
//           leaveFrom="opacity-100"
//           leaveTo="opacity-0"
//         >
//           <div className="fixed inset-0 bg-lightSage bg-opacity-75 transition-opacity" />
//         </Transition.Child>

//         <div className="fixed inset-0 overflow-hidden">
//           <div className="absolute inset-0 overflow-hidden">
//             <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
//               <Transition.Child
//                 as={Fragment}
//                 enter="transform transition ease-in-out duration-500 sm:duration-700"
//                 enterFrom="translate-x-full"
//                 enterTo="translate-x-0"
//                 leave="transform transition ease-in-out duration-500 sm:duration-700"
//                 leaveFrom="translate-x-0"
//                 leaveTo="translate-x-full"
//               >
//                 <Dialog.Panel className="pointer-events-auto w-screen max-w-md absolute bottom-0 right-0">
//                   <div className="flex h-1/2 flex-col overflow-y-scroll bg-white shadow-xl">
//                     <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
//                       <div className="flex items-start justify-between">
//                         <Dialog.Title className="text-lg font-lato font-medium text-darkGreen">
//                           shopping bag
//                         </Dialog.Title>
//                         <div className="ml-3 flex h-7 items-center">
//                           <button
//                             type="button"
//                             className="-m-2 p-2 text-darkSage hover:text-lightSage"
//                             onClick={() => setOpen(false)}
//                           >
//                             <span className="sr-only">Close panel</span>
//                             <XMarkIcon className="h-6 w-6" aria-hidden="true" />
//                           </button>
//                         </div>
//                       </div>

//                       <div className="mt-8">
//                         <div className="flow-root">
//                           <ul className="-my-6 divide-y divide-gray-200">
//                             {products.map((product) => (
//                               <li key={product.id} className="flex py-6">
//                                 <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
//                                   <img
//                                     src={product.imageSrc}
//                                     alt={product.imageAlt}
//                                     className="h-full w-full object-cover object-center"
//                                   />
//                                 </div>

//                                 <div className="ml-4 flex flex-1 flex-col">
//                                   <div>
//                                     <div className="flex justify-between text-base font-medium text-darkGreen font-lato">
//                                       <h3>
//                                         <a href={product.href}>
//                                           {product.name}
//                                         </a>
//                                       </h3>
//                                       <p className="ml-4">{product.price}</p>
//                                     </div>
//                                     <p className="mt-1 text-sm text-darkSage font-lato">
//                                       {product.brand}
//                                     </p>
//                                   </div>
//                                   <div className="flex flex-1 items-end justify-between text-sm">
//                                     <p className="text-darkGreen font-lato">
//                                       qty {product.quantity}
//                                     </p>

//                                     <div className="flex">
//                                       <button
//                                         type="button"
//                                         className="font-medium font-lato text-darkSage hover:text-lightSage"
//                                       >
//                                         remove
//                                       </button>
//                                     </div>
//                                   </div>
//                                 </div>
//                               </li>
//                             ))}
//                           </ul>
//                         </div>
//                       </div>
//                     </div>

//                     <div className="border-t border-lightSage py-6 px-4 sm:px-6">
//                       <div className="flex justify-between text-base font-medium text-darkGreen font-lato">
//                         <p>subtotal</p>
//                         <p>$60.00</p>
//                       </div>
//                       <p className="mt-0.5 text-sm text-darkSage font-lato">
//                         shipping and taxes calculated at checkout.
//                       </p>
//                       <div className="mt-6">
//                         <Link
//                           to="/products"
//                           className="flex items-center justify-center rounded-md border border-transparent bg-darkSage px-6 py-3 text-base font-medium text-offWhite font-lato shadow-sm hover:bg-lightSage"
//                         >
//                           checkout
//                         </Link>
//                       </div>
//                       <div className="mt-6 flex justify-center text-center text-sm text-gray-500"></div>
//                     </div>
//                   </div>
//                 </Dialog.Panel>
//               </Transition.Child>
//             </div>
//           </div>
//         </div>
//       </Dialog>
//     </Transition.Root>
//   );
// }
