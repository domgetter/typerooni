(ns typerooni.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [reagent.core :as reagent :refer [atom]]
            [reagent.session :as session]
            [secretary.core :as secretary :include-macros true]
            [accountant.core :as accountant]
            [cljs.core.async :refer [<! >! chan alts!]]))



;; -------------------------
;; Views

(defonce words-10ff ["or" "line" "important" "may" "life" "mountain" "went"
  "change" "along" "water" "through" "just" "look" "because" "than" "into"
  "three" "after" "does" "stop" "get" "eye" "small" "world" "carry" "play"
  "all" "really" "before" "don't" "family" "river" "enough" "another" "came"
  "number" "why" "might" "write" "must" "other" "air" "something" "even" "own"
  "children" "in" "keep" "saw" "kind" "see" "without" "country" "left" "night"
  "would" "for" "name" "being" "far" "quickly" "down" "between" "like" "miss"
  "to" "very" "which" "who" "seem" "some" "large" "letter" "food" "got" "never"
  "feet" "part" "from" "have" "away" "sound" "same" "those" "take" "great"
  "make" "no" "said" "day" "mean" "plant" "she" "book" "quick" "most" "hard"
  "way" "where" "long" "and" "say" "follow" "around" "each" "young" "animal"
  "he" "land" "been" "do" "car" "place" "together" "Indian" "will" "sentence"
  "group" "point" "different" "white" "can" "page" "them" "thought" "song" "new"
  "watch" "oil" "we" "ask" "two" "not" "any" "boy" "are" "list" "an" "if" "be"
  "city" "time" "end" "these" "picture" "show" "out" "tree" "over" "by" "run"
  "form" "head" "leave" "house" "you" "start" "right" "his" "that" "hear" "on"
  "so" "her" "how" "high" "me" "my" "sea" "study" "help" "is" "move" "your"
  "face" "what" "read" "it's" "their" "big" "use" "too" "below" "light" "when"
  "give" "near" "its" "of" "want" "later" "found" "home" "it" "both" "then"
  "talk" "earth" "until" "set" "only" "idea" "men" "quite" "old" "off" "took"
  "has" "last" "us" "school" "made" "had" "hand" "second" "tell" "come" "well"
  "example" "year" "girl" "much" "every" "walk" "up" "here" "spell" "need"
  "there" "next" "answer" "open" "him" "add" "such" "many" "learn" "was"
  "people" "as" "with" "mother" "word" "our" "first" "did" "America" "could"
  "were" "now" "back" "find" "work" "under" "still" "little" "eat" "father"
  "also" "state" "thing" "try" "think" "often" "paper" "turn" "above" "go"
  "once" "they" "call" "the" "close" "this" "grow" "one" "while" "sometimes"
  "story" "about" "but" "cut" "at" "few" "question" "began" "almost" "let" "put"
  "again" "side" "good" "four" "always" "mile" "soon" "know" "man" "should"
  "live" "begin" "more"])


(defonce words-aoeu ["the" "name" "of" "very" "to" "through" "and" "just" "form" "in"
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

(defn words-rows-reducer [row-length [full pending] word]
  (let [total-chars-of-word-and-pending (apply + (count (:word word)) (map count (map :word pending))) ; this could be fancier, taking into account space width and individual letter width
        adding-word-would-overflow-row (> total-chars-of-word-and-pending row-length)]
    (if adding-word-would-overflow-row
      [(conj full pending) [word]]
      [full (conj pending word)])))

(defn words->rows [words]
  (apply conj (reduce (partial words-rows-reducer 32) [[] []] words)))

(defn n-random-words [n wordlist]
  (->> (take n (repeatedly #(rand-nth wordlist)))
       (map-indexed (fn [i w] {:word w :correctness "" :id i}))
       (into [])))

(defonce history (atom []))

(defn history-json []
  (clj->js @history))

(defn initial-game-state []
  (let [target-words (n-random-words 500 words-10ff)
        target-words-rows (words->rows target-words)]
    {:target-words target-words
     :target-words-rows target-words-rows ; needs to be recalculated if the target words view changes width
     :words-typed []
     :current-word-timestamps []
     :current-word-backspace-used false
     :current-word 0
     :offset-height 0
     :offset-row 0
     :start-time 0
     :end-time 60000
     :started false
     :finished false
     :time-left 60}))

(defn clear-input [input-field] (set! (.-value input-field) ""))

(defn reset-game! [state input-field]
  (js/clearInterval (:timer-pid @state))
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
  (if (not (empty? (:current-word-timestamps @state)))
      (do
        (swap! state update-in [:current-word-timestamps] pop)
        (swap! state assoc :current-word-backspace-used true))
      (swap! state assoc :current-word-backspace-used false)))

(defn reset-timestamps [state]
  (swap! state assoc :current-word-timestamps [])
  (swap! state assoc :current-word-backspace-used false))

(defn current-word-html [state]
  (js/document.querySelector (str "[data-word-id=\"" (:current-word @state) "\"]")))

(defn is-correct [input word]
  (= (apply str (butlast input)) word))

(defn save-timestamps [input state]
  (let [times (conj (:current-word-timestamps @state) (:timeStamp input))
        time-diffs (into [] (map #(- %2 %1) times (rest times)))
        word (.-value (:target input))
        correct (is-correct word (:word (nth (:target-words @state) (:current-word @state))))
        backspace-used (:current-word-backspace-used @state)
        new-word {:times time-diffs :word word :correct correct :backspace-used backspace-used}
        correctness (if correct "correct" "incorrect")
        new-target (assoc (nth (:target-words @state) (:current-word @state)) :correctness correctness)]
    (swap! state update-in
      [:words-typed] conj new-word)
    (swap! state update-in
      [:target-words] assoc (:current-word @state) new-target)))

(defn current-word-height [state]
  (try
    (.-height (.getBoundingClientRect (current-word-html state)))
    (catch :default e
      0)))

(defn get-current-word-tag-top [state]
  (try
    (.-top (.getBoundingClientRect (current-word-html state)))
    (catch :default e
      0)))

(defn get-current-word-parent-tag-top [state]
  (try
    (.-top (.getBoundingClientRect (.-parentElement (.-parentElement (current-word-html state)))))
    (catch :default e
      0)))

(defn current-word-top [state]
  (- (get-current-word-tag-top state) (get-current-word-parent-tag-top state)))

(defn move-cursor [state]
  (swap! state update-in [:current-word] inc)
  (if (> (- (current-word-top state) (- (:offset-height @state)))
         (* 1.05 (current-word-height state)))
    #_(swap! state update-in [:offset-height] - (current-word-height state))
    (swap! state update-in [:offset-row] inc)))

(defn save-word [input state]
  (let [word-exists (not (clojure.string/blank? (.-value (:target input))))]
    (if word-exists
      (do (save-timestamps input state)
          (reset-timestamps state)
          (move-cursor state)))))

(defn save-word-and-clear-input [input state]
  (save-word input state)
  #_(js/console.log (str (:words-typed @state)))
  (clear-input (:target input)))

(defn save-most-recent-timestamp [input state]
  (let [most-recent-timestamp (:timeStamp input)
        is-first-letter (= 1 (count (.-value (:target input))))]
    (if is-first-letter (reset-timestamps state))
    (swap! state update-in
      [:current-word-timestamps] conj most-recent-timestamp)))

(defn end-game! [state]
  (if (and (:running @state) (not (:finished @state)))
    (do
      (swap! state assoc
        :running false
        :finished true)
      (js/clearInterval (:timer-pid @state))
      (swap! history conj
        (:words-typed @state)))))

(defn game-over? [state]
  (and (:running @state)
       (> (.getTime (js/Date.)) (:end-time @state))))

(defn check-if-game-over-and-update-timer [state]
  (if (:started @state)
    (if (or (game-over? state) (:finished @state))
        (end-game! state)
        (swap! state update-in [:time-left] dec))))

(defn consume-input [keydown-input keypress-input state]
  (go
    (loop [[[input state] _] (alts! [keydown-input keypress-input])]
      (let [is-backspace (= (:which input) 8)
            is-space (= (:which input) 32)
            is-timer (:timer input)
            #_#_is-over (:finish input)]
        (cond
          is-backspace (remove-most-recent-timestamp state)
              is-space (save-word-and-clear-input input state)
              is-timer (check-if-game-over-and-update-timer state)
                 :else (save-most-recent-timestamp input state))
        (recur (alts! [keydown-input keypress-input]))))))

(swap! state assoc
  :input-chan (consume-input keydown-input keypress-input state))

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
      :timer-pid (js/window.setInterval #(go (>! keypress-input [{:timer true} state])) 1000)
      :start-time start-time
      :end-time end-time
      :running true
      :started true))
  #_(js/console.log (:timer-pid @state)))

(defn keypress-func [e state]
    (let [time-stamp (.-timeStamp e)
          input (event->map e)
          is-space (= (:which input) 32)
          game-has-not-started (not (:started @state))
          game-has-ended (game-over? state)
          game-is-over-and-new-word (and (:finished @state) is-space)]
      (if game-has-not-started (start-game! state))
      (if game-has-ended (end-game! state))
      (if game-is-over-and-new-word (clear-input (:target input)))
      (if (and (not (:finished @state)) (:running @state))
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

(defn get-input-field-html []
  (js/document.getElementById "typing-test-input"))

(defn indexed-span [i word state]
  ^{:key i}
  [:span {:data-word-id (:id word)
          :class (str
                   "target-word" \space
                   (if (= (:id word) (:current-word @state)) "current") \space
                   (:correctness ((:target-words @state) (:id word))))}
    (:word word)])

(defn word-view [target state]
  (map-indexed (fn [i word] (indexed-span i word state)) target))

(defn row->div [i row state]
  ^{:key i}
  [:div {:style {:clear "both"}}
    (doall (word-view row state))])

(defn typing-run-view [state]
  [:div {:id "target-word-view"
         :class (if (:finished @state) "game-over" "")}
    [:div {:id "target-words"
           :style {:top (:offset-height @state)}}
      (let [word-rows (take 3 (drop (:offset-row @state) (:target-words-rows @state)))
            words (mapcat identity word-rows)]
        #_(js/console.log (count words))
        #_(doall (word-view words state))
        (doall (map-indexed (fn [i row] (row->div i row state)) word-rows)))]])

(defn typing-run-input []
  [:form {:style {:width "600px" :float "left"}}
    [:input#typing-test-input {:type "text"
                               :onKeyDown (fn [e] (keydown-func e state))
                               :onKeyPress (fn [e] (keypress-func e state))
                               :autoFocus "autoFocus"
                               :spellCheck "false"
                               :autoCapitalize "off"
                               :autoCorrect "off"
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

(defn game-timer [state]
  (cond
    (:finished @state) 0
    (not (:started @state)) 60
    :else (int (/ (- (:end-time @state) (.getTime (js/Date.))) 1000))))
    ;; :else (:time-left @state)))

(defn typing-run-timer [state]
  [:div {:style {:float "left"}}
    (let [timer (game-timer state)]
      [:span {:id "game-timer"}
        (cond
          (= 60 timer) "1:00"
          (< 9 timer 60) (str "0:" timer)
          :else (str "0:0" timer))])])

(defn word->wordlets-with-times [w]
  ;{:word "there " :times [45 63 96 58 111]} ->
  ;  (("th" [45 "there "]) ("he" 63) ("er" 96) ("re" 58) ("e " 111))
  (partition 2 2 (interleave (map #(apply str %) (partition 2 1 (:word w))) (map (fn [t] [t (:word w)]) (:times w)))))

(defn wordlet-reducer [acc [wordlet timing]]
  (assoc acc wordlet (conj (if (acc wordlet) (acc wordlet) []) timing)))

(defn wordlet-averages [[wordlet time-stamp]]
  (let [timings (map first time-stamp)]
  [wordlet
   (int (/ (reduce + timings) (count timings)))
   time-stamp]))

(defn sorted-wordlets [words]
  ;[{:word "the " :times [23 63 88] :backspace-used false :correct true}
  ; {:word "there " :times [45 63 96 58 111] :backspace-used false :correct true}]
  ;  [["th" 34] ["he" 63] ["e " 99.5] ["er" 96] ["re" 58]]

  ;[{:word "the " :times [23 63 88]} {:word "there " :times [45 63 96 58 111]}]
  ;  (("th" 23) ("he" 63) ("e " 88) ("th" 45) ("he" 63) ("er" 96) ("re" 58) ("e " 111)) ->
  ;    {"th" [[23 "the "] [45 "there "]], "he" [63 63], "e " [88 111], "er" [96], "re" [58]} ->
  ;      [["th" 34] ["he" 63] ["e " 99.5] ["er" 96] ["re" 58]]
  ;        [[["th" 34] 0] [["he" 63] 1] [["e " 99.5] 2] [["er" 96] 3] [["re" 58] 4]]
  (->> words
    (remove :backspace-used)
    (filter :correct)
    (mapcat word->wordlets-with-times)
    (reduce wordlet-reducer {})
    (map wordlet-averages)
    (sort-by second <)
    (map-indexed (fn [i w] [w i]))))

(defn stats [state]
  (let [total-words (count (:words-typed @state))
        total-correct-words (count (filter :correct (:words-typed @state)))
        total-incorrect-words (count (remove :correct (:words-typed @state)))
        total-number-of-characters (->> (:words-typed @state)
                                        (filter :correct)
                                        (map :word)
                                        (map count)
                                        (reduce +))
        total-words-wpm (/ total-number-of-characters 5)]
  [:div {:id "games-analysis"}
    [:span {:id "games-analysis-total-words"}
      (str "total words: " total-words)]
    [:span {:id "games-analysis-correct-words"}
      (str "correct words: " total-correct-words)]
    [:span {:id "games-analysis-incorrect-words"}
      (str "incorrect words: " total-incorrect-words)]
    [:span {:id "games-analysis-wpm"}
      (str "wpm: " total-words-wpm)]
    [:div {:id "games-analysis-wordlets"}
      [:table
        [:tbody
          [:tr
            [:th "Wordlet"]
            [:th {:style {:font-size "70"}} "wpm ratio"]
            [:th "equivalent wpm"]
            [:th "average ms"]
            [:th "Timings"]
          (for [[[wordlet average timings] key] (sorted-wordlets (mapcat identity @history))]
            ^{:key key}
            [:tr
              [:td wordlet]
              [:td (.toFixed (/ (/ 12000 average) total-words-wpm) 2) ]
              [:td (int (/ 12000 average))]
              [:td average]
              [:td (str timings)]])]]]]]))

(defn test-page []
  [:div {:style {:width "800px"}}
    #_[:div {:style {:position "absolute"
                   :top "50px"
                   :left "30px"
                   :height "300px"
                   :width "180px"
                   :border "solid 1px black"}} (analysis state)]
    [:div {:font-size "2em" :width "800px"}
      [:span "This is a single run!"]
      (typing-run-view state)
      (typing-run-input)
      [typing-run-timer state]
      [:div {:style {:float "left" :padding-left "10px"}
             :onClick (fn [e] (reset-game! state (get-input-field-html)))}
        "reset"]
      (if (:finished @state) (stats state) )]])

(defn current-page []
  [:div {:style {:width "800px"}} (test-page)])

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
