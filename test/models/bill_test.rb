# == Schema Information
#
# Table name: bills
#
#  id          :bigint           not null, primary key
#  author_id   :integer          not null
#  history_id  :integer          not null
#  group_id    :integer
#  description :text             not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  cost        :decimal(7, 2)
#  receipt_id  :integer
#
require 'test_helper'

class BillTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
