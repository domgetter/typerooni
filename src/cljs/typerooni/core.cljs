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

(defn initial-game-state []
  (let [start-time (.getTime (js/Date.))
        end-time (+ start-time 60000)]
    {:target-words (into [] (map (fn [w] {:word w :correctness ""}) (shuffle words)))
     :words-typed []
     :current-word-timestamps []
     :current-word 0
     :offset-height 0
     :start-time start-time
     :end-time end-time
     :running false
     :started false
     :finished false}))

(defn clear-input [input-field] (set! (.-value input-field) ""))

(defn reset-game! [state input-field]
  (reset! state (initial-game-state))
  (clear-input input-field))

(defonce state (atom (initial-game-state)))

(defn home-page []
  [:div [:h2 "Welcome to typerooni"]
    [:div [:a {:href "/abou"} "go to about page"]]
    [:div [:a {:href "/test"} "take a test"]]])

(defn about-page []
  [:div [:h2 "About typerooni"]
    [:div [:a {:href "/"} "go to the home page"]]])

(defn wpm [diff]
  (/ 12000 diff))

(defn remove-most-recent-timestamp [state]
  (if (not (empty? (:current-word-timestamps @state))) (swap! state update-in [:current-word-timestamps] pop)))

(defn reset-timestamps [state]
  (swap! state assoc :current-word-timestamps []))

(defn current-word-html [state]
  (js/document.querySelector (str "[data-word-id=\"" (:current-word @state) "\"]")))

(defn is-correct [input word]
  (= (apply str (butlast input)) word))

(defn save-timestamps [input state]
  (let [times (conj (:current-word-timestamps @state) (:timeStamp input))
        time-diffs (into [] (map #(- %2 %1) times (rest times)))
        word (.-value (:target input))
        correct (is-correct word (:word (nth (:target-words @state) (:current-word @state))))
        new-word {:times time-diffs :word word :correct correct}
        correctness (if correct "correct" "incorrect")
        new-target (assoc (nth (:target-words @state) (:current-word @state)) :correctness correctness)]
    (swap! state update-in
      [:words-typed] conj new-word)
    (swap! state update-in
      [:target-words] assoc (:current-word @state) new-target)))

(defn current-word-height [state]
  (.-height (.getBoundingClientRect (current-word-html state))))

(defn get-current-word-tag-top [state]
  (.-top (.getBoundingClientRect (current-word-html state))))

(defn get-current-word-parent-tag-top [state]
  (.-top (.getBoundingClientRect (.-parentElement (current-word-html state)))))

(defn current-word-top [state]
  (- (get-current-word-tag-top state) (get-current-word-parent-tag-top state)))

(defn move-cursor [state]
  (swap! state update-in [:current-word] inc)
  (if (> (- (current-word-top state) (- (:offset-height @state)))
         (* 1.05 (current-word-height state)))
    (swap! state update-in [:offset-height] - (current-word-height state))))

(defn save-word [input state]
  (let [word-exists (not (clojure.string/blank? (.-value (:target input))))]
    (if word-exists
      (do (save-timestamps input state)
          (reset-timestamps state)
          (move-cursor state)))))

(defn save-word-and-clear-input [input state]
  (save-word input state)
  (js/console.log (str (:words-typed @state)))
  (clear-input (:target input)))

(defn save-most-recent-timestamp [input state]
  (let [most-recent-timestamp (:timeStamp input)
        is-first-letter (= 1 (count (.-value (:target input))))]
    (if is-first-letter (reset-timestamps state))
    (swap! state update-in
      [:current-word-timestamps] conj most-recent-timestamp)))

(defn consume-input [keydown-input keypress-input state]
  #_(js/setTimeout (go (>! keypress-input {:finish true})) 10000)
  (go
    (loop [[[input state] _] (alts! [keydown-input keypress-input])]
      (let [is-backspace (= (:which input) 8)
            is-space (= (:which input) 32)
            #_#_is-over (:finish input)]
        (cond
          is-backspace (remove-most-recent-timestamp state)
          is-space (save-word-and-clear-input input state)
          :else (save-most-recent-timestamp input state))
        #_(js/console.log (str (:words-typed @state)))
        (recur (alts! [keydown-input keypress-input]))))))

(swap! state assoc :input-chan (consume-input keydown-input keypress-input state))

(defn event->map [e]
  #_(js/console.log e)
  {#_#_:key (.-key e)
   #_#_:keyCode (.-keyCode e)
   #_#_:charCode (.-charCode e)
   :which (.-which e)
   :timeStamp (.-timeStamp e)
   :target (.-target e)})

(defn start-game! [state]
  (let [start-time (.getTime (js/Date.))
        end-time (+ start-time 60000)]
    (swap! state assoc
      :start-time start-time
      :end-time end-time
      :running true
      :started true)))

(defn end-game! [state]
  (swap! state assoc
    :running false
    :finished true))

(defn keypress-func [e state]
    (let [time-stamp (.-timeStamp e)
          input (event->map e)
          is-space (= (:which input) 32)
          game-has-not-started (not (:started @state))
          game-has-ended (and (not (:finished @state)) (> (.getTime (js/Date.)) (:end-time @state)))
          game-is-over-and-new-word (and (:finished @state) is-space)]
      (if game-has-not-started (start-game! state))
      (if game-has-ended (end-game! state))
      (if game-is-over-and-new-word (clear-input (:target input)))
      (if (and (not (:finised @state)) (:running @state))
        (go (>! keypress-input [input state])))))

(defn keydown-func [e state]
  (let [key-pressed {:which (.-which e)}
        is-backspace (= (:which key-pressed) 8)
        is-f5 (= (:which key-pressed) 116)
        is-enter (= (:which key-pressed) 13)]
    (if is-backspace
      (go (>! keydown-input [key-pressed state])))
    (if is-f5 (reset-game! state (.-target e)))
    (if (or is-f5 is-enter) (.preventDefault e))))

(defn indexed-span [i word]
  ^{:key i}
  #_(js/console.log i)
  [:span {:data-word-id i :class (str
                                   "target-word" \space
                                   (if (= i (:current-word @state)) "current") \space
                                   #_(if (>= i (:current-word @state)) "" (if (:correct ((:words-typed @state) i)) "correct" "incorrect"))
                                   (:correctness ((:target-words @state) i)))} (:word word)])

(defn word-view [target]
  (map-indexed indexed-span target))

(defn typing-run-view [state]
  #_(js/console.log "hello")
  [:div {:style {:width "800px"
                 :height "8.66em"
                 :overflow "hidden"
                 :border "1px solid grey"
                 :padding "8px"
                 :border-radius "6px"
                 :box-shadow "2px 2px 2px grey"
                 :margin-bottom "20px"}}
    [:div {:style {:position "relative"
                   :top (:offset-height @state)
                   :transition "top 0.3s"
                   :transition-timing-function "ease-in-out"}}
      (doall (word-view (take 100 (:target-words @state))))]])

(defn typing-run-input []
  [:form {:style {:width "600px" :float "left"}}
    [:input {:id "typing-test-input"
             :type "text"
             :onKeyDown (fn [e] (keydown-func e state))
             :onKeyPress (fn [e] (keypress-func e state))
             :autoFocus "autoFocus"
             :spellcheck "false"
             :autocapitalize "off"
             :autocorrect "off"
             :autoComplete "off"
             :style {
               :width "100%"
               :height "30px"
               :font-size "24"
               :padding-left "4px"
               :border-radius "4px"}}]])

(defn word->wpm [i word]
  (let [count (count (:times word))
        sum (reduce + (:times word))
        timings (:times word)]
    [(:word word) (js/Math.round (/ 12000 (/ sum count))) timings i]))

(defn show-stats [word timings]
  (js/console.log (str timings)))

(defn analysis [state]
  [:table [:tbody
    [:tr [:th "Word"] [:th "WPM"]]
    (for [[word wpm timings key] (take 10 (reverse (map-indexed word->wpm (:words-typed @state))))]
      ^{:key key}
      [:tr
        [:td #_{:onMouseOver (fn [e] (show-stats word timings))} [:span {:title (str timings)} word]]
        [:td wpm]])]])

(defn view-state []
  (str (dissoc @state :target-words)))

(defn typing-run-timer [state]
  [:span {:style {
            :margin-left "20px"
            :border "1px solid black"
            :padding "4px"
            :border-radius "3px"}}
    (int (/ (- (:end-time @state) (.getTime (js/Date.))) 1000))])

(defn stats [state]
  [:div {:style {:clear "both"}}
    [:span {:style {:padding-right "10px"}} (str "total words: " (count (:words-typed @state)))]
    [:span {:style {:padding-right "10px" :color "green"}} (str "correct words: " (count (filter :correct (:words-typed @state))))]
    [:span {:style {:padding-right "10px" :color "red"}} (str "incorrect words: " (count (remove :correct (:words-typed @state))))]
    [:span {:style {:color "blue"}} (str "wpm: " (/ (reduce + (map count (map :word (filter :correct (:words-typed @state))))) 5))]])

(defn test-page []
  [:div {:style {:width "800px"}}
    [:div {:style {:position "absolute"
                   :top "50px"
                   :left "30px"
                   :height "300px"
                   :width "180px"
                   :border "solid 1px black"}} (analysis state)]
    [:div {:font-size "2em" :width "800px"}
      [:span "This is a single run!"]
      (typing-run-view state)
      (typing-run-input)
      (typing-run-timer state)
      (if (:finished @state) (stats state) )]])

(defn current-page []
  [:div {:style {:width "800px"}} [(session/get :current-page)]])

;; -------------------------
;; Routes

(secretary/defroute "/" []
  (session/put! :current-page #'home-page))

(secretary/defroute "/about" []
  (session/put! :current-page #'about-page))

(secretary/defroute "/test" []
  (session/put! :current-page #'test-page))

;; -------------------------
;; Initialize app

(defn mount-root []
  (reagent/render [current-page] (.getElementById js/document "app")))

(defn init! []
  (accountant/configure-navigation!)
  (accountant/dispatch-current!)
  (mount-root))
