class Transaction < ApplicationRecord


  belongs_to :bill,
    foreign_key: :bill_id,
    class_name: :Bill

  belongs_to :user,
    foreign_key: :user_id,
    class_name: :User

end
