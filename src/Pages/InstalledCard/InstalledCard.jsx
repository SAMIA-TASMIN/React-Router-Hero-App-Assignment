import React from 'react';
import { removeFromStoreDb } from '../../utility/addToDB';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const InstalledCard = ({ a, onUninstall }) => {
    const { companyName, description, downloads, id, image, ratingAvg, ratings, reviews, size, title } = a;
    
    const handleUninstall = () => {
        removeFromStoreDb(id);
        toast.success("Uninstalled successfully!");
        setTimeout(() => {
            onUninstall(); 
        }, 500);
    };

    return (
        <div>
            <ToastContainer position="top-right" autoClose={3000} />
            <div className="flex items-center justify-between bg-white shadow rounded-xl p-4 mb-3 hover:shadow-md transition-all">
                <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-gray-200 rounded-lg overflow-hidden">
                        <img src={image} alt={title} className="w-full h-full object-cover" />
                    </div>
                    <div>
                        <h2 className="text-lg font-semibold">{title}</h2>
                        <div className="flex items-center text-sm gap-4 text-gray-600 mt-1">
                            <span className="flex items-center gap-1">
                                <span className="text-green-500">⬇</span> {downloads}
                            </span>
                            <span className="flex items-center gap-1">
                                <span className="text-orange-500">⭐</span> {ratingAvg}
                            </span>
                            <span>{size} MB</span>
                        </div>
                    </div>
                </div>
                
                <button 
                    onClick={handleUninstall}
                    className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
                >
                    Uninstall
                </button>
            </div>
        </div>
    );
};

export default InstalledCard;