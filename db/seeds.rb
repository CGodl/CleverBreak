# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create([{name: 'TestAcct', email: 'TestEmail@hmail.com', password: 'abc12345'}, 
            {name: 'dummyFriend', email: 'dummyEmail@gmail.com', password: 'abc12345'},
            {name: 'Leto', email: 'letoEmail@gmail.com', password: 'abc12345'},
            {name: 'Arnie', email: 'AnieEmail@gmail.com', password: 'abc12345'},
            {name: 'JoJo', email: 'JoEmail@gmail.com', password: 'abc12345'},
            {name: 'Billy Joel', email: 'BillyJ@gmail.com', password: 'abc12345'}
            ])

Friend.create([{requestor_id: 1, requested_id: 2},
                {requestor_id: 1, requested_id: 3},
                {requestor_id: 1, requested_id: 4},
                {requestor_id: 1, requested_id: 5},
                {requestor_id: 3, requested_id: 1},
                {requestor_id: 4, requested_id: 1},
                {requestor_id: 2, requested_id: 3},
                ])