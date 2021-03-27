class CreateTasks < ActiveRecord::Migration[6.0]
  def change
    create_table :tasks do |t|
      t.string :name
      t.integer :point
      t.float :latitude
      t.float :longitude
      t.boolean :complete, default: false
      t.string :deadline
      t.integer :max_user
    end
  end
end
