import { useState, useRef, useEffect } from 'react';

const Chat = () => {
    const [messages, setMessages] = useState([
        { text: 'Hallo teh', sender: 'Jisoo' },
        { text: 'Barangnya masih ada?', sender: 'Jisoo' },
        { text: 'Masih teh', sender: 'self' },
        { text: 'Cod besok bisa teh?', sender: 'Jisoo' },
        { text: 'Besok bisa teh gas', sender: 'self' },
        { text: 'biasa saya cod di parkiran Graha Merah Putih Telkom', sender: 'self' },
        { text: 'Okay siap', sender: 'Jisoo' },
    ]);

    const [newMessage, setNewMessage] = useState('');
    const messagesEndRef = useRef(null);

    const user = {
        name: 'Jisoo',
        avatar: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png'
    };
    

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    const handleSendMessage = () => {
        if (newMessage.trim() !== '') {
            setMessages([...messages, { text: newMessage, sender: 'self' }]);
            setNewMessage('');
        }
    };

    return (
        <div className="flex h-screen">
            <div className="w-1/3 border-r border-gray-200 p-4">
                <input
                    type="text"
                    placeholder="Cari ..."
                    className="w-full p-2 border rounded mb-4"
                />
                <div className="flex items-center p-2 hover:bg-gray-100 rounded cursor-pointer">
                    <img
                        src={user.avatar}
                        alt="profile"
                        className="w-10 h-10 rounded-full mr-2"
                    />
                    <div>
                        <h2 className="text-lg font-semibold">{user.name}</h2>
                        <p className="text-gray-500">Okay siap</p>
                    </div>
                    <span className="ml-auto text-gray-400">10:32</span>
                </div>
            </div>

            <div className="flex flex-col flex-1 p-4">
                <div className="flex-1 overflow-auto mb-4">
                    <div className="flex flex-col space-y-2">
                        {messages.map((message, index) => (
                            <div
                                key={index}
                                className={`flex justify-${message.sender === 'self' ? 'end' : 'start'}`}
                            >
                                <div className="flex items-end space-x-2 max-w-xs">
                                    {message.sender !== 'self' && (
                                        <img
                                            src={user.avatar}
                                            alt="avatar"
                                            className="w-6 h-6 rounded-full"
                                        />
                                    )}
                                    <div
                                        className={`p-3 rounded-lg ${message.sender === 'self' ? 'bg-green-700 text-white' : 'bg-gray-200'
                                            }`}
                                    >
                                        {message.text}
                                    </div>
                                </div>
                            </div>
                        ))}
                        <div ref={messagesEndRef} />
                    </div>
                </div>
                <div className="flex">
                    <input
                        type="text"
                        placeholder="Tulis pesan ..."
                        className="flex-1 p-2 border rounded-l-lg"
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') handleSendMessage();
                        }}
                    />
                    <button
                        className="bg-green-700 text-white p-2 rounded-r-lg"
                        onClick={handleSendMessage}
                    >
                        Send
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Chat;
