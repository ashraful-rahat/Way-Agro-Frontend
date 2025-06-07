    // <section className="py-20 px-6 md:px-20 bg-green-50">
    //     <div className="text-center mb-16">
    //       <h2 className="text-4xl font-bold text-green-800 mb-4">Meet Our Farmers</h2>
    //       <p className="text-lg text-gray-700">The passionate people behind our success</p>
    //     </div>

    //     <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
    //       {[1, 2, 3].map((_, idx) => (
    //         <motion.div
    //           key={idx}
    //           initial={{ opacity: 0, y: 30 }}
    //           whileInView={{ opacity: 1, y: 0 }}
    //           transition={{ duration: 0.6, delay: idx * 0.1 }}
    //           viewport={{ once: true }}
    //           className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
    //         >
    //           <div className="h-64 relative">
    //             <Image
    //               src={`/assets/farmer-${idx + 1}.jpg`}
    //               alt={`Farmer ${idx + 1}`}
    //               fill
    //               className="object-cover"
    //             />
    //           </div>
    //           <div className="p-6">
    //             <h3 className="text-xl font-bold text-gray-800 mb-1">Farmer Name</h3>
    //             <p className="text-green-600 mb-3">Role/Position</p>
    //             <p className="text-gray-600">Specialization and short bio about their farming experience.</p>
    //           </div>
    //         </motion.div>
    //       ))}
    //     </div>
    //   </section>

import React from 'react';

const TeamPage = () => {
    return (
        <div>
            <h1>this is team page</h1>
        </div>
    );
};

export  default TeamPage;