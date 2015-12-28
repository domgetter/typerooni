(ns typerooni.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [reagent.core :as reagent :refer [atom]]
            [reagent.session :as session]
            [secretary.core :as secretary :include-macros true]
            [accountant.core :as accountant]
            [cljs.core.async :refer [<! >! chan alts!]]))



;; -------------------------
;; Views

(defonce words ["the" "name" "of" "very" "to" "through" "and" "just" "form" "in"
  "much" "is" "great" "it" "think" "you" "say" "that" "help" "he" "low" "was"
  "line" "for" "before" "on" "turn" "are" "cause" "with" "same" "as" "mean"
  "differ" "his" "move" "they" "right" "be" "boy" "at" "old" "one" "too" "have"
  "does" "this" "tell" "from" "sentence" "or" "set" "had" "three" "by" "want"
  "hot" "air" "but" "well" "some" "also" "what" "play" "there" "small" "we"
  "end" "can" "put" "out" "home" "other" "read" "were" "hand" "all" "port"
  "your" "large" "when" "spell" "up" "add" "use" "even" "word" "land" "how"
  "here" "said" "must" "an" "big" "each" "high" "she" "such" "which" "follow"
  "do" "act" "their" "why" "time" "ask" "if" "men" "will" "change" "way" "went"
  "about" "light" "many" "kind" "then" "off" "them" "need" "would" "house"
  "write" "picture" "like" "try" "so" "us" "these" "again" "her" "animal" "long"
  "point" "make" "mother" "thing" "world" "see" "near" "him" "build" "two"
  "self" "has" "earth" "look" "father" "more" "head" "day" "stand" "could" "own"
  "go" "page" "come" "should" "did" "country" "my" "found" "sound" "answer" "no"
  "school" "most" "grow" "number" "study" "who" "still" "over" "learn" "know"
  "plant" "water" "cover" "than" "food" "call" "sun" "first" "four" "people"
  "thought" "may" "let" "down" "keep" "side" "eye" "been" "never" "now" "last"
  "find" "door" "any" "between" "new" "city" "work" "tree" "part" "cross" "take"
  "since" "get" "hard" "place" "start" "made" "might" "live" "story" "where"
  "saw" "after" "far" "back" "sea" "little" "draw" "only" "left" "round" "late"
  "man" "run" "year" "don't" "came" "while" "show" "press" "every" "close"
  "good" "night" "me" "real" "give" "life" "our" "few" "under" "stop" "open"
  "ten" "seem" "simple" "together" "several" "next" "vowel" "white" "toward"
  "children" "war" "begin" "lay" "got" "against" "walk" "pattern" "example"
  "slow" "ease" "center" "paper" "love" "often" "person" "always" "money"
  "music" "serve" "those" "appear" "both" "road" "mark" "map" "book" "science"
  "letter" "rule" "until" "govern" "mile" "pull" "river" "cold" "car" "notice"
  "feet" "voice" "care" "fall" "second" "power" "group" "town" "carry" "fine"
  "took" "certain" "rain" "fly" "eat" "unit" "room" "lead" "friend" "cry"
  "began" "dark" "idea" "machine" "fish" "note" "mountain" "wait" "north" "plan"
  "once" "figure" "base" "star" "hear" "box" "horse" "noun" "cut" "field" "sure"
  "rest" "watch" "correct" "color" "able" "face" "pound" "wood" "done" "main"
  "beauty" "enough" "drive" "plain" "stood" "girl" "contain" "usual" "front"
  "young" "teach" "ready" "week" "above" "final" "ever" "gave" "red" "green"
  "list" "oh" "though" "quick" "feel" "develop" "talk" "sleep" "bird" "warm"
  "soon" "free" "body" "minute" "dog" "strong" "family" "special" "direct"
  "mind" "pose" "behind" "leave" "clear" "song" "tail" "measure" "produce"
  "state" "fact" "product" "street" "black" "inch" "short" "lot" "numeral"
  "nothing" "class" "course" "wind" "stay" "question" "wheel" "happen" "full"
  "complete" "force" "ship" "blue" "area" "object" "half" "decide" "rock"
  "surface" "order" "deep" "fire" "moon" "south" "island" "problem" "foot"
  "piece" "yet" "told" "busy" "knew" "test" "pass" "record" "farm" "boat" "top"
  "common" "whole" "gold" "king" "possible" "size" "plane" "heard" "age" "best"
  "dry" "hour" "wonder" "better" "laugh" "true" "thousand" "during" "ago"
  "hundred" "ran" "am" "check" "remember" "game" "step" "shape" "early" "yes"
  "hold" "hot" "west" "miss" "ground" "brought" "interest" "heat" "reach" "snow"
  "fast" "bed" "five" "bring" "sing" "sit" "listen" "perhaps" "six" "fill"
  "table" "east" "travel" "weight" "less" "language" "morning" "among" "speed"
  "typing" "mineral" "seven" "eight" "nine" "everything" "something" "standard"
  "distant" "paint"])

(def keydown-input (chan))
(def keypress-input (chan))
(def state (atom {}))
(swap! state assoc :target-words (shuffle words)
                   :words-typed []
                   :current-word-timestamps []
                   :current-word 0)

(def this-run-words (shuffle words))

(defn get-n-words [n]
  (take n this-run-words))

(def target (get-n-words 300))

(defn home-page []
  [:div [:h2 "Welcome to typerooni"]
    [:div [:a {:href "/about"} "go to about page"]]
    [:div [:a {:href "/typing-run"} "take a test"]]])

(defn about-page []
  [:div [:h2 "About typerooni"]
    [:div [:a {:href "/"} "go to the home page"]]])

(defn wpm [diff]
  (/ 12000 diff))

(defn clear-input [input-field] (set! (.-value input-field) ""))

(defn remove-most-recent-timestamp [state]
  (swap! state update-in [:current-word-timestamps] pop))

(defn reset-timestamps [state]
  (swap! state assoc :current-word-timestamps []))

(defn save-timestamps [input state]
  (let [times (conj (:current-word-timestamps @state) (:timeStamp input))
        word (.-value (:target input))
        new-word {:times times :word word}]
    (swap! state update-in
       [:words-typed] conj new-word)))

(defn move-cursor [state]
  (swap! state update-in [:current-word] inc))

(defn save-word [input state]
  (let [word-exists (not (clojure.string/blank? (.-value (:target input))))]
    (if word-exists
      (do (save-timestamps input state)
          (reset-timestamps state)
          (move-cursor state)))))

(defn save-word-and-clear-input [input state]
  (save-word input state)
  (clear-input (:target input)))

(defn save-most-recent-timestamp [input state]
  (let [most-recent-timestamp (:timeStamp input)]
    (swap! state update-in
      [:current-word-timestamps] conj most-recent-timestamp)))

(defn consume-input []
  (go
    (loop [[[input state] _] (alts! [keydown-input keypress-input])]
      (let [is-backspace (= (:which input) 8)
            is-space (= (:which input) 32)]
        (cond
          is-backspace (remove-most-recent-timestamp state)
          is-space (save-word-and-clear-input input state)
          :else (save-most-recent-timestamp input state))
        (js/console.log (str (:words-typed @state)))
        (recur (alts! [keydown-input keypress-input]))))))

(defn event->map [e]
  #_(js/console.log e)
  {#_#_:key (.-key e)
   #_#_:keyCode (.-keyCode e)
   #_#_:charCode (.-charCode e)
   :which (.-which e)
   :timeStamp (.-timeStamp e)
   :target (.-target e)})

(defn keypress-func [e state]
    (let [time-stamp (.-timeStamp e)
          key-pressed (event->map e)]
      (go (>! keypress-input [key-pressed state]))))

(defn keydown-func [e state]
  (let [key-pressed {:which (.-which e)}
        is-backspace (= (:which key-pressed) 8)]
    (if is-backspace
      (go (>! keydown-input [key-pressed state])))))

(defn indexed-span [i w]
  ^{:key i}
  [:span {:data-word-id i :class (str "target-word " (if (= i (:current-word @state)) "current" ""))} w])

(defn word-view [target]
  (map-indexed indexed-span target))

(defn typing-run-view [state]
  [:div {:style {:width "800px" :height "9em" :overflow "hidden"}}
    (doall (word-view (:target-words @state)))])

(defn typing-run-input []
  [:form
    [:input {:type "text"
             :onKeyDown (fn [e] (keydown-func e state))
             :onKeyPress (fn [e] (keypress-func e state))}]])

(defn typing-run-page []
  (consume-input)
  [:div {:font-size "2em"}
    [:span "This is a single run!"]
    (typing-run-view state)
    (typing-run-input)])

(defn current-page []
  [:div [(session/get :current-page)]])

;; -------------------------
;; Routes

(secretary/defroute "/" []
  (session/put! :current-page #'home-page))

(secretary/defroute "/about" []
  (session/put! :current-page #'about-page))

(secretary/defroute "/typing-run" []
  (session/put! :current-page #'typing-run-page))

;; -------------------------
;; Initialize app

(defn mount-root []
  (reagent/render [current-page] (.getElementById js/document "app")))

(defn init! []
  (accountant/configure-navigation!)
  (accountant/dispatch-current!)
  (mount-root))
