"use client";
import { useState } from 'react';

export default function MessagesPage() {
  const [activeContact, setActiveContact] = useState(0);

  const contacts = [
    { id: 0, name: "Sarah Jenkins", role: "Homeowner", lastMessage: "Are you still 10 mins away?", time: "10:42 AM", unread: 2 },
    { id: 1, name: "TradeLink AI", role: "System", lastMessage: "Your quote of £120 was accepted.", time: "09:15 AM", unread: 0 },
    { id: 2, name: "Michael Smith", role: "Homeowner", lastMessage: "Thanks for the great work yesterday.", time: "Yesterday", unread: 0 }
  ];

  const messages = [
    { id: 0, sender: "Sarah Jenkins", text: "Hi, water is still leaking. Are you on your way?", time: "10:35 AM", isMe: false },
    { id: 1, sender: "Me", text: "Yes, I'm just navigating around some traffic. Should be there in 10 mins.", time: "10:38 AM", isMe: true },
    { id: 2, sender: "Sarah Jenkins", text: "Okay, I've put a bucket under it for now. Hurry please!", time: "10:40 AM", isMe: false },
    { id: 3, sender: "Sarah Jenkins", text: "Are you still 10 mins away?", time: "10:42 AM", isMe: false }
  ];

  return (
    <div className="max-w-7xl mx-auto h-[calc(100vh-8rem)] glass-panel overflow-hidden flex">
      
      {/* Contacts Sidebar */}
      <div className="w-80 border-r border-slate-700/50 bg-slate-900/30 flex flex-col">
        <div className="p-4 border-b border-slate-700/50">
          <h2 className="text-xl font-bold text-white mb-4">Messages</h2>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">🔍</span>
            <input 
              type="text" 
              placeholder="Search chats..." 
              className="glass-input pl-10 py-2 w-full text-sm"
            />
          </div>
        </div>
        
        <div className="flex-1 overflow-y-auto p-2 space-y-2">
          {contacts.map((contact, idx) => (
            <button 
              key={contact.id}
              onClick={() => setActiveContact(idx)}
              className={`w-full text-left p-4 rounded-xl transition-colors ${
                activeContact === idx ? 'bg-teal-500/20 border border-teal-500/30' : 'hover:bg-slate-800/50 border border-transparent'
              }`}
            >
              <div className="flex justify-between items-start mb-1">
                <span className={`font-bold ${activeContact === idx ? 'text-teal-400' : 'text-white'}`}>
                  {contact.name}
                </span>
                <span className="text-xs text-slate-400">{contact.time}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-400 truncate pr-2">{contact.lastMessage}</span>
                {contact.unread > 0 && (
                  <span className="w-5 h-5 rounded-full bg-amber-500 text-slate-900 text-xs flex items-center justify-center font-bold shrink-0">
                    {contact.unread}
                  </span>
                )}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col bg-slate-900/50 relative">
        {/* Chat Header */}
        <div className="h-20 border-b border-slate-700/50 p-6 flex justify-between items-center bg-slate-900/80">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-teal-500/20 border border-teal-500/50 flex items-center justify-center text-teal-400 text-xl font-bold">
              {contacts[activeContact].name.charAt(0)}
            </div>
            <div>
              <h3 className="font-bold text-white text-lg">{contacts[activeContact].name}</h3>
              <span className="text-xs text-slate-400">{contacts[activeContact].role}</span>
            </div>
          </div>
          <button className="glass-btn text-sm flex items-center gap-2">
            <span>📞</span> Call
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {activeContact === 0 ? (
            messages.map((msg) => (
              <div key={msg.id} className={`flex flex-col ${msg.isMe ? 'items-end' : 'items-start'}`}>
                <div className={`max-w-[70%] p-4 rounded-2xl ${
                  msg.isMe ? 'bg-teal-500 text-slate-900 rounded-tr-sm' : 'bg-slate-800 text-slate-100 rounded-tl-sm border border-slate-700'
                }`}>
                  {msg.text}
                </div>
                <span className="text-xs text-slate-500 mt-1">{msg.time}</span>
              </div>
            ))
          ) : (
             <div className="h-full flex items-center justify-center text-slate-500">
               No messages in this mock conversation.
             </div>
          )}
        </div>

        {/* Input Area */}
        <div className="p-4 border-t border-slate-700/50 bg-slate-900/80">
          <form className="relative flex items-center" onSubmit={(e) => { e.preventDefault(); alert("Message sent!"); }}>
            <input 
              type="text" 
              placeholder="Type a message..." 
              className="w-full bg-slate-800 border border-slate-700 focus:border-teal-500 rounded-full py-4 pl-6 pr-16 text-white outline-none transition-colors"
            />
            <button type="submit" className="absolute right-2 w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center hover:bg-teal-400 transition-colors">
              <span className="text-slate-900 transform rotate-45 -translate-y-[2px] -translate-x-[2px]">✈️</span>
            </button>
          </form>
        </div>
      </div>

    </div>
  );
}
