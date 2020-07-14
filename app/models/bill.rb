# == Schema Information
#
# Table name: bills
#
#  id           :bigint           not null, primary key
#  author_id    :integer          not null
#  history_id   :integer          not null
#  group_id     :integer
#  description  :text             not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  cost         :decimal(7, 2)
#  recipient_id :integer
#
class Bill < ApplicationRecord
  validates :author_id, presence: true

  belongs_to :author,
    foreign_key: :author_id,
    class_name: :User

    belongs_to :recepients, #This is an array of ids
    foreign_key: :recipient_id,
    class_name: :User

    


end
