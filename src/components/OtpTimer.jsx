import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useRef, useState } from "react";

const OtpTimer = ({
  minutes = 0,
  seconds = 5,
  resendButtonTextStyle,
  resendButtonStyle,
  resendButtonText = "Resent",
  resendButtonAction,
  LabelText = "Resent in second:",
  LabelTextStyle,
}) => {
  const [min, setMin] = useState(minutes);
  const [sec, setSec] = useState(seconds);
  const [isTimerActive, setIsTimerActive] = useState(true);

  const handleButton = () => {
    setMin(minutes);
    setSec(seconds);
    setIsTimerActive(true);
    resendButtonAction();
  };

  // useEffect(() => {
  //   let timerId;
  //   if (isTimerActive) {
  //     timerId = setInterval(() => {
  //       timerRef.current -= 1;
  //       if (timerRef.current < 0) {
  //         clearInterval(timerId);
  //       } else {
  //         setTime(timerRef.current);
  //       }
  //     }, 1000);
  //   }

  //   if (!timerRef.current) {
  //     setIsTimerActive(false);
  //   }
  //   return () => {
  //     clearInterval(timerId);
  //   };
  // }, [timerRef.current, isTimerActive]);

  useEffect(() => {
    let countDown;
    if (isTimerActive) {
      countDown = setInterval(() => {
        if (!sec) {
          if (!min) {
            clearInterval(countDown);
          } else {
            setMin((m) => m - 1);
            setSec(60);
          }
        }
        if (sec > 0) setSec((sec) => sec - 1);
      }, 1000);
    }
    if (!min && !sec) setIsTimerActive(false);
    return () => clearInterval(countDown);
  }, [sec, min, isTimerActive]);

  return (
    <>
      {!min && !sec ? (
        <TouchableOpacity onPress={handleButton} style={resendButtonStyle}>
          <Text style={resendButtonTextStyle}>{resendButtonText}</Text>
        </TouchableOpacity>
      ) : (
        <Text style={LabelTextStyle}>
          {LabelText} {min < 10 ? `0${min}` : min}:{sec < 10 ? `0${sec}` : sec}
        </Text>
      )}
    </>
  );
};

export default OtpTimer;
