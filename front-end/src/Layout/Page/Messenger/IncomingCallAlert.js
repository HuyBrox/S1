import { Phone, Video, Video as VideoIcon, VideoOff } from 'lucide-react';
// Component thông báo cuộc gọi đến
export const IncomingCallAlert = ({ call, onAccept, onReject }) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
    <div className="bg-gray-800 p-6 rounded-lg shadow-xl w-80">
      <div className="flex flex-col items-center gap-4">
        <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center animate-pulse">
          {call.callType === 'video' ?
            <Video className="w-8 h-8 text-white" /> :
            <Phone className="w-8 h-8 text-white" />
          }
        </div>
        <div className="text-center">
          <h3 className="text-lg font-semibold text-white">{call.callerName}</h3>
          <p className="text-gray-300">{call.callType === 'video' ? 'Cuộc gọi video' : 'Cuộc gọi thoại'}</p>
        </div>
        <div className="flex gap-4 mt-2">
          <button
            onClick={onReject}
            className="p-3 bg-red-500 hover:bg-red-600 rounded-full transition-colors"
          >
            <Phone className="w-6 h-6 text-white rotate-135" />
          </button>
          <button
            onClick={onAccept}
            className="p-3 bg-green-500 hover:bg-green-600 rounded-full transition-colors"
          >
            <Phone className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>
    </div>
  </div>
);