import datetime
import json
from typing import Any, Text, Dict, List

from rasa_sdk import Action, Tracker
from rasa_sdk.executor import CollectingDispatcher


class GetTime(Action):

    def name(self) -> Text:
        return "action_get_time"

    def run(self, dispatcher: CollectingDispatcher,
            tracker: Tracker,
            domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:

        currentTime = datetime.datetime.now()
        msg = currentTime.strftime('%I:%M %p')

        dispatcher.utter_message(text=msg)

        return []


class ActionGreetByTime(Action):

    def name(self) -> Text:
        return "action_Greet_byTime"

    def run(self, dispatcher: CollectingDispatcher,
            tracker: Tracker,
            domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:

        currentTime = datetime.datetime.now()

        if currentTime.hour < 12:
            msg = "Good Morning 🔆"
        elif currentTime.hour < 18:
            msg = "Good Afternoon 😊"
        else:
            msg = "Good Evening 🌓"

        dispatcher.utter_message(text=msg)

        return []
