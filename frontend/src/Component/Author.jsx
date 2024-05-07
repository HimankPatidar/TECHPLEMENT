
import React from 'react';

function Author({ author, quotes }) {
    return (
        <div className="container mx-auto mt-8 ">
            <h1 className="text-3xl font-bold mb-4 text-center font-serif">{author}'s Quotes</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-14">
                {quotes.length > 0 ? (
                    quotes.map((quote, index) => (
                        <div key={index} className="bg-gray-300 p-4 rounded-md shadow-md relative">
                            <span className="absolute top-0 left-0 text-4xl text-gray-200">&ldquo;</span>
                            <p className="text-lg mb-2">"{quote.content}"</p>
                            <p className="text-lg text-gray-600 text-right">- {quote.author}</p>
                            {quote.tags && (
                                <div className="flex flex-wrap mt-2">
                                    {quote.tags.map((tag, index) => (
                                        <span key={index} className="bg-blue-500 text-white px-2 py-1 rounded-md text-sm mr-2 mb-2">{tag}</span>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))
                ) : (
                    <p>No quotes found for {author}.</p>
                )}
            </div>
        </div>
    );
}

export default Author;
