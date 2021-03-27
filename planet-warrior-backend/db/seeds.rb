# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all
Task.destroy_all


u1 = User.create(email: "user@gmail.com", name: "User", password: "useruser", image: "")


tasks_name = ["plant tree", "pick up trash", "collect plastic"]


1000.times {
  Task.create(
    name: tasks_name.sample,
    point: rand(10..20),
    latitude: rand(454030..456370)/10000.0,
    longitude: rand(-1228322..-1222760)/10000.0,
    deadline: Faker::Date.between(from: '01/04/2021', to: '30/04/2021'),
    max_user: rand(5..10),
  )
}

