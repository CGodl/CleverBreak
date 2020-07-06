# == Schema Information
#
# Table name: friends
#
#  id           :bigint           not null, primary key
#  requestor_id :integer          not null
#  requested_id :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#
class Friend < ApplicationRecord
  validates :requestor_id, :requested_id, presence: true


  belongs_to :requestor,
    foreign_key: :requestor_id,
    class_name: :User

  belongs_to :requested,
    foreign_key: :requested_id,
    class_name: :User


end
