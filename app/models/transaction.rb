# == Schema Information
#
# Table name: transactions
#
#  id         :bigint           not null, primary key
#  bill_id    :integer          not null
#  user_id    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Transaction < ApplicationRecord

  belongs_to :bill,
    foreign_key: :bill_id,
    class_name: :Bill

  belongs_to :user,
    foreign_key: :user_id,
    class_name: :User

end
