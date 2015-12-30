(ns ^:figwheel-no-load typerooni.dev
  (:require [typerooni.core :as core]
            [figwheel.client :as figwheel :include-macros true]))

(enable-console-print!)

(figwheel/watch-and-reload
  :websocket-url "ws://192.168.1.101:3449/figwheel-ws"
  :jsload-callback core/mount-root)

(core/init!)
