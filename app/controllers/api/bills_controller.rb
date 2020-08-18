class Api::BillsController < ApplicationController 

  def create
    recipient = params[:bills][:name]

    recipient_found_id = User.find_by(name: recipient).id



    if Bill.last == nil
      current_history_id = 0
    else
      current_history_id = Bill.last.history_id + 1
    end

    current_user_id = current_user.id

    @bill = Bill.new({author_id: current_user.id,
                      author_payor: bill_params[:author_payor],
                     recipient_id: recipient_found_id,
                     history_id: current_history_id,
                     group_id: bill_params[:group_id],
                     cost: bill_params[:cost],
                     description: bill_params[:description],
                     updated_at: bill_params[:updated_at],
                     created_at: bill_params[:created_at]
                      })

      
    if @bill.save!
        render :show
    else
      render json: ["Could not create bill"]
    end
  end

  def destroy
    @bill = Bill.find_by(bill: [:id]) 

    if @bill
      @bill.destroy
    else
      render json: ['bill could not be found']
    end

  end

  def index
    @bills = current_user.bills
  end

  def show
    @bill = Bill.find(params[:id])

    if @bill
      render :show
    else
      render json: ["Unable to find bill"]
    end


  end


  def update
    @bill = Bill.find(params[:id])
  
  

    if (current_user.id === @bill.author_id || current_user.id === @bill.recipient_id ) && @bill.update(bill_params)
      render :show
    else
      render json: ["Unable to update bill"]
    end

  end

  def destroy
    # @bill = current_user.bills.find(params[:id])
    @bill = Bill.find(params[:id])
    # 
    if @bill.destroy
      render :show
    else
      render json: ['Bill could not be deleted']
    end

  end


  private

  def bill_params
    params.require(:bills).permit(:author_id, :history_id, :author_payor, :recipient_id, :group_id, :cost, :description, :updated_at, :created_at)
  end

end