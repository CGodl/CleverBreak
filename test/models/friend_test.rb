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
require 'test_helper'

class FriendTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
