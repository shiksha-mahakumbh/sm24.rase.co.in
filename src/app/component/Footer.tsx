"use client";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter, faFacebook, faLinkedin, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { db } from "@/app/firebase";
import { doc, onSnapshot, updateDoc, getDoc, increment, setDoc } from "firebase/firestore";
import { Spin } from 'antd'; 

const Footer: React.FC = () => {
  const [dailyVisitors, setDailyVisitors] = useState<number | null>(null);
  const [totalVisitors, setTotalVisitors] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const totalDocRef = doc(db, "visitors", "total");
    const dailyDocRef = doc(db, "visitors", "daily");
    const yesterdayDocRef = doc(db, "visitors", "yesterday");

    const today = new Date().toISOString().split('T')[0]; // Get today's date in YYYY-MM-DD format

    const resetDailyCount = async () => {
      try {
        const dailyDocSnap = await getDoc(dailyDocRef);
        
        if (dailyDocSnap.exists()) {
          const dailyData = dailyDocSnap.data();

          if (dailyData.date !== today) {
            // Store the previous day's count
            await setDoc(yesterdayDocRef, { count: dailyData.count, date: dailyData.date });

            // Reset daily count for the new day
            await setDoc(dailyDocRef, { count: 0, date: today });
          }
        }
      } catch (error) {
        console.error("Error resetting daily visitor count:", error);
      }
    };

    const updateVisitorCount = async () => {
      try {
        const totalDocSnap = await getDoc(totalDocRef);
        const dailyDocSnap = await getDoc(dailyDocRef);

        // Initialize total and daily counts if they don't exist
        if (!totalDocSnap.exists()) {
          await setDoc(totalDocRef, { count: 0 });
        }
        if (!dailyDocSnap.exists()) {
          await setDoc(dailyDocRef, { count: 0, date: today });
        } else {
          const dailyData = dailyDocSnap.data();
          if (dailyData.date !== today) {
            await resetDailyCount();
          }
        }

        // Increment counts
        await updateDoc(totalDocRef, { count: increment(1) });
        await updateDoc(dailyDocRef, { count: increment(1) });

        console.log("Visitor count updated successfully.");
      } catch (error) {
        console.error("Error updating visitor counts:", error);
      }
    };

    updateVisitorCount();

    const unsubscribeTotal = onSnapshot(totalDocRef, (docSnap) => {
      if (docSnap.exists()) {
        const data = docSnap.data();
        setTotalVisitors(data.count);
        setLoading(false); 
      }
    });

    const unsubscribeDaily = onSnapshot(dailyDocRef, (docSnap) => {
      if (docSnap.exists()) {
        const data = docSnap.data();
        setDailyVisitors(data.count);
        setLoading(false); 
      }
    });

    // Schedule the daily reset at midnight
    const now = new Date();
    const timeUntilMidnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0).getTime() - now.getTime();

    const resetAtMidnight = setTimeout(() => {
      resetDailyCount();
    }, timeUntilMidnight);

    return () => {
      unsubscribeTotal();
      unsubscribeDaily();
      clearTimeout(resetAtMidnight);
    };
  }, []);

  return (
    <footer className="bg-[#000] text-white p-4">
      <div className="container mx-auto flex flex-col space-y-4">
        <div className="flex flex-wrap sm:flex-row justify-between items-center sm:space-x-4 p-2">
          <div className="flex p-2 rounded-lg flex-wrap space-x-4 mb-2">
            <a href="https://twitter.com/raseconferences" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faXTwitter} size="lg" />
            </a>
            <a href="https://www.facebook.com/raseconferences" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} size="lg" />
            </a>
            <a href="https://www.linkedin.com/in/rase-conferences-3a4b71270" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </a>
            <a href="https://www.instagram.com/shikshamahakumbh/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </a>
            <a href="https://www.youtube.com/channel/UCd-_B2IbovCDgVI1_I5ORGg" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faYoutube} size="lg" />
            </a>
          </div>
          <div className="flex flex-row p-2 rounded-lg space-x-4 text-primary font-bold">
            <div className="">
              <p>
                <span className="text-lg font-semibold text-white">Daily Visitors:</span>
                {loading ? <Spin className="ml-2" /> : ` ${dailyVisitors}`}
              </p>
              <p>
                <span className="text-lg font-semibold text-white">Total Visitors:</span>
                {loading ? <Spin className="ml-2" /> : ` ${totalVisitors}`}
              </p>
            </div>
          </div>
        </div>
        <div className="bg-gray-700 text-white p-2 flex flex-col items-center space-y-2">
          <p className="text-lg font-semibold text-center">
            &copy; {new Date().getFullYear()} Department of Holistic Education. All rights reserved.
          </p>
          <div className="flex space-x-2 text-center">
            <a href="/privacypolicy" className="hover:underline">Privacy Policy</a>
            <span>|</span>
            <a href="/termsandconditions" className="hover:underline">Terms and Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
