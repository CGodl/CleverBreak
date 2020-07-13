# == Schema Information
#
# Table name: bills
#
#  id          :bigint           not null, primary key
#  author_id   :integer          not null
#  history_id  :integer          not null
#  group_id    :integer
#  cost        :decimal(, )      not null
#  description :text             not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Bill < ApplicationRecord
  validates :author_id, presence: true

  belongs_to :author,
    foreign_key: :author_id,
    class_name: :User

  has_many :transactions, #This is an array of ids
    foreign_key: :bill_id,
    class_name: :Transaction

  has_many :receipients,
    through: :transactions,
    source: :User

end
