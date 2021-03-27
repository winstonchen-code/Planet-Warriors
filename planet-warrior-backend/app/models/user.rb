class User < ApplicationRecord

  has_many :user_tasks
  has_many :tasks, through: :user_tasks


  has_secure_password
  
  validates :email, :password, :name, presence: true
  validates :password, length: { minimum: 8}
  validates :email, uniqueness: true
  

end
