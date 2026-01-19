import React from 'react';

const QuizSection = () => {
    return (
        <div className="max-w-4xl mx-auto py-10 px-6">
            <div className="bg-white rounded-2xl shadow-sm p-8 text-gray-800">
                <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-6">Question 1 of 10</h2>
                    <p className="text-lg leading-relaxed">
                        What is the capital of Pakistan?
                    </p>
                </div>

                <div className="space-y-4">
                    {['Karachi', 'Lahore', 'Islamabad', 'Quetta'].map((option, idx) => (
                        <button
                            key={idx}
                            className="w-full text-left p-4 rounded-xl border-2 border-gray-100 hover:border-teal-500 hover:bg-teal-50 transition-all flex items-center gap-4"
                        >
                            <span className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-sm font-medium">
                                {String.fromCharCode(65 + idx)}
                            </span>
                            {option}
                        </button>
                    ))}
                </div>

                <div className="mt-10 flex justify-between items-center">
                    <button className="px-6 py-2 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
                        Previous
                    </button>
                    <button className="px-8 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors">
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default QuizSection;
