class User < ApplicationRecord

  has_many :user_tasks
  has_many :tasks, through: :user_tasks


  has_secure_password
  
  validates :email, :password, :name, presence: true
  validates :password, length: { minimum: 8}
  validates :email, uniqueness: true
  

  def self.captain
    hash = Hash.new(0)
    UserTask.where(status: "complete").map {|ut| hash[ut.user] += ut.task.point}
    hash.sort_by {|key,value| -value}[0]
  end
end
