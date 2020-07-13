class Api::BillsController < ApplicationController 

  def create
    # if Bill.last.history_id == nil
    #   last_history_id = 0
    # else
    #   last_history_id = Bill.last.history_id
    # end

    # receipients = User.find_by(email: [:email])

    # billed_user = User.find_by(email: [:email])
    ##### ADD STRONG PARAMS #####

      @bill = Bill.new(bill_params)
      # if bill.save 
      #   render :show
      # else
      #   ['Could not find bill']
      # end


    
    
    if @bill.save!
      # render '/api/bills/show'
        render :show
      
      # @bill[:recepients] = receipients
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
    # @bills = current_user.bills
    # //debugger
    @bills = Bill.all
    render :index
    # //debugger
  end

  def show
    bill = Bill.find(params[:id])
    debugger
    if bill
      render :show
    else
      render json: ["Unable to find bill"]
    end


  end


  private

  def bill_params
    params.require(:bills).permit(:author_id, :history_id, :receipt_id, :group_id, :cost, :description, :updated_at)
  end

end