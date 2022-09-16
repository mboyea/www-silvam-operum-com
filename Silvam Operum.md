TABS:
Tasks
└list by Category

Calendar
└Events
└Routines

Routines
└Categories
└Events

DATA STRUCTURES:
Category
└title (String)
└tasks (Task[])

Task
└title (String)
└description (String)
└category (String)
└instances (Instance[])
└recurrances (Recurrance[])

Instance
└task (Task)
└startTime (Time)
└?stopTime (Time)
└notification (Notification)
└journal (String)

Recurrance
└period (Integer)
└type (NONE, DAY, WEEK, MONTH, YEAR)
└count (Integer)
└pattern (RecurrPattern)

Notification
└type (NONE, ALARM, EMAIL, DRAWER)
└time ()








OLD OLD OLD OLD OLD ORIGINAL:

TABS:
Tasks
└list by Category

Calendar
└Events
└Routines

Routines
└Categories
└Events


DATA STRUCTURES:
Category
└title (String)
└tasks (Task[])

Task
└title (String)
└description (String)
└category (String)
└events (Event[])

Event
└task (Task)
└instances (Instance[])
└journal (String)
└isCancelled (Boolean)
└notification (Notification)

Instance
└startTime (Time)
└?stopTime (Time)
└recurrance (Recurrance)

Recurrance
└type (NONE, DAY, WEEK, MONTH, YEAR)
└length (Integer)
└count (Integer)
└time (Time)

Notification
└type (NONE, ALARM, EMAIL, DRAWER)
└time ()