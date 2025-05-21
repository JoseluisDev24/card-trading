"use client";
import { useEffect, useState } from "react";

const WelcomeModal = () => {
  const [show, setShow] = useState(false);

    useEffect(() => {
      setShow(true);
    }, []);
  
    if (!show) return null;
  

  return (
    <>
      <div className="fixed inset-0 bg-black opacity-70 z-50" />
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div className="bg-green-50 fixed top-12 rounded-3xl shadow-2xl p-4 w-[95%] h-[68%] lg:w-[45%] lg:h-[55%] lg:top-28 text-center">
          <h2 className="text-3xl font-semibold mb-4">
            🚀 What&apos;s New on TradeUp!
          </h2>
          <div className="bg-green-100/60 rounded-xl shadow-xl p-2 md:px-3 py-2 text-left text-sm text-gray-800 space-y-4 lg:space-y-1">
            <div>
              <p className="font-bold text-lg py-1">
                📩 Express Interest, Your Way
              </p>
              <p className="text-gray-700">
                You asked, we delivered. The Express Interest button just
                leveled up. Now when you&apos;re browsing someone&apos;s
                listings, you can select the exact items you&apos;re interested
                in. When they open your message, it&apos;ll auto-fill their side
                of the trade with the listings you picked. No guesswork. No back
                and forth. Just smooth trading.
              </p>
            </div>

            <div>
              <p className="font-bold text-lg py-1 text-gray-800">
                🕵️‍♂️ Post History
              </p>
              <p className="text-gray-700">
                Post now live outside the feed! You can now see a trader&apos;s
                post history when visiting their profile and you can see your
                own history too.
              </p>
            </div>
          </div>

          <button
            onClick={() => setShow(false)}
            className="mt-4 bg-orange-600 hover:bg-orange-800 opacity-80 text-white font-bold w-38 h-11 py-2 px-6 rounded-full cursor-pointer transition"
          >
            Hide
          </button>
        </div>
      </div>
    </>
  );
};

export default WelcomeModal;
