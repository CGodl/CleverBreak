# == Schema Information
#
# Table name: memberships
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  group_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Membership < ApplicationRecord


  belongs_to :user,
    foreign_key: :user_id,
    class_name: :User

  belongs_to :user,
    foreign_key: :group_id,
    class_name: :Group

end
